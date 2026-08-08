import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "ok", service: "swift-deal-solutions", timestamp: new Date().toISOString() });
}
