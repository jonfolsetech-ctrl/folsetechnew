import{NextResponse}from"next/server";import{z}from"zod";import{getAIProvider}from"@/lib/ai";
const inputSchema=z.object({goal:z.string().min(2).max(120),businessType:z.string().max(120).default(""),website:z.string().max(300).optional()});
export async function POST(request:Request){try{const input=inputSchema.parse(await request.json());const result=await getAIProvider().generateLeadRecommendation(input);return NextResponse.json(result)}catch{return NextResponse.json({error:"Invalid assessment data"},{status:400})}}
