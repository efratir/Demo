using DAL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class QuestionBL
    {
        public static void Put(QuestionDto question)
        {
            QuestionDal.Updatequestion(question);
        }

        public static QuestionDto Post(QuestionDto question)
        {
          return  QuestionDal.AddQuestion(question);
        }

        public static void Delete(int questionCode)
        {
            QuestionDal.Deletequestion(questionCode);
        }


    }
}
