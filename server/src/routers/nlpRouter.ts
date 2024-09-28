import privateProcedure from "../trpc/procedures/privateProcedure";
import t from "../trpc/trpc";
import ProcessedPrompt from "../types/ProcessedPrompt";
import nlpserver from "../utils/nlpserver";
import yup from "../utils/yup";

const nlpRouter = t.router({
  processPrompt: privateProcedure
    .input(
      yup.object({
        text: yup.string().required(),
      })
    )
    .mutation(async ({ input }) => {
      const { data } = await nlpserver.post<ProcessedPrompt>("/", {
        text: input.text,
      });
      return {
        ...data,
        From: data.From,
        To: data.To,
      };
    }),
});

export default nlpRouter;
