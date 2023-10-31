// const Configuration = require("openai").Configuration;
// const OpenAIApi = require("openai").OpenAIApi;

// const configuration = new Configuration({
//     apiKey: "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",
//     organization: "org-YpCC4LWerl62kAV01h6bx9bY"
// });

// const openai = new OpenAIApi(configuration);

// async function main(){
//     const response = await openai.createCompletion({ // Corregido a createCompletion
//         model: "text-davinci-003",
//         prompt: "Cuenta un chiste"
//     });

//     console.log(response);
// }

// main();

//prueba conexión


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
    organization: "org-YpCC4LWerl62kAV01h6bx9bY"
});

const openai = new OpenAIApi(configuration);

async function main() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Cuenta un chiste"
    });

    console.log(response);
}

main();
