import { request, RequestOptions } from "urllib";

export const handleDigestAuth = async ({ url, options }: { url: string; options: RequestOptions }) => {
    const { data, res } = await request(url, options);

    // Convert Buffer to string for consistent handling
    let responseData = data;
    if (Buffer.isBuffer(data)) {
        responseData = data.toString('utf8');
    }

    return {
        data: responseData, // Always return string data
        res: {
            statusCode: res.statusCode,
            headers: res.headers,
            statusMessage: res.statusMessage
        }
    };
}