/**API key for the API call. In production never place here API key!!!*/
const API_KEY = "{MY_API_KEY}";

/**Call to the OPEN AI API */
async function getResponse(prompt, options) {
    /**GPT3 setup */
    const gptOptions = JSON.stringify({
        prompt,
        max_tokens: options?.max_tokens ?? 100,
        temperature: options?.temperature ?? 0.7,
        top_p: options?.top_p ?? 1,
        n: options?.n ?? 1
    });

    const reqBody = {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        },
        body: gptOptions,
        redirect: "follow"
    };

    const response = await fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", reqBody).then(response => response.json());

    // Sending whole response, because GPT-3 can generate couple of examples and maybe we would like to choose first or last or random
    return response;
}