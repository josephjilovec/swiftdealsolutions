import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const mode = body.mode === "buyer"
      ? "Buyer network application"
      : body.mode === "privacy"
        ? "Alias & Alibi privacy package request"
        : "Asset submission";

    if (!name || !email || !emailPattern.test(email)) {
      return NextResponse.json({ error: "Please provide a valid name and email address." }, { status: 400 });
    }

    if (body.consent !== "accepted") {
      return NextResponse.json({ error: "Consent is required before the inquiry can be sent." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("Swift Deal Solutions inquiry email is not configured.");
      return NextResponse.json({ error: "Inquiry email is not configured yet. Please email realjjemail@gmail.com directly." }, { status: 503 });
    }

    const excluded = new Set(["website", "consent"]);
    const rows = Object.entries(body)
      .filter(([key, value]) => !excluded.has(key) && value !== "" && value != null)
      .map(([key, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #e8e3d8;font-weight:600;text-transform:capitalize;">${escapeHtml(key.replaceAll("_", " "))}</td><td style="padding:8px 12px;border-bottom:1px solid #e8e3d8;">${escapeHtml(value)}</td></tr>`)
      .join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Swift Deal Solutions — ${mode} from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;color:#121c27;max-width:720px;margin:auto;">
            <h1 style="font-family:Georgia,serif;font-weight:400;">${escapeHtml(mode)}</h1>
            <p>Submitted through swiftdealsolutions.com.</p>
            <table style="border-collapse:collapse;width:100%;">${rows}</table>
          </div>
        `
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "The inquiry could not be sent. Please try again or email directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry route error:", error);
    return NextResponse.json({ error: "The inquiry could not be processed." }, { status: 500 });
  }
}
