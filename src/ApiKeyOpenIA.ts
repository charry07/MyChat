import { Configuration, OpenAIApi } from 'openai';

const apiKey = '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';
const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

export const chatGPT = async (message:[]) => {
  const completition = await openai.createChatCompletion({
    // model: 'gpt-4-0314',
    model: 'gpt-3.5-turbo',
    // messages: [{role: 'user', content: 'Hello'}],
    messages: message,
  });

  const msg: any = completition.data.choices[0].message;

  console.log(msg);
  return msg;

};
