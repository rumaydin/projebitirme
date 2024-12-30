import Product from "@/app/models/product";
import { connectToDB } from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        connectToDB();
        const products = await Product.find();
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}