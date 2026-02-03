import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";
import exampleData from "../../../../example_ferreteria.json";

export async function GET() {
    try {
        const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;

        if (!token) {
            return NextResponse.json({ error: "Missing SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN in .env" }, { status: 500 });
        }

        const client = createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: false, // We are writing
            token, // Important for write access
        });

        // Prepare Document
        const doc = {
            _type: 'landingPage',
            _id: `landing-${exampleData.slug}`, // Deterministic ID
            slug: { current: exampleData.slug },
            meta: exampleData.meta,
            content: exampleData.content
        };

        console.log("Creating document...", doc._id);
        const result = await client.createOrReplace(doc);

        return NextResponse.json({ success: true, result });
    } catch (error: any) {
        console.error("Seeding error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
