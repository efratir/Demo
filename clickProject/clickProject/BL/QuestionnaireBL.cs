using DAL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class QuestionnaireBL
    {
        public static void Put(QuestionnaireDto questionnaire)
        {
            QuestionnaireDal.UpdateQuestionnaire(questionnaire);
        }
        public static QuestionnaireDto Post(QuestionnaireDto questionnaire)
        {
            
          return QuestionnaireDal.AddQuestionnaire(questionnaire);
        }
        

        public static void Delete(int QuestionnaireCode)
        {
            QuestionnaireDal.Deletequestionnaire(QuestionnaireCode);
        }

        public static List<QuestionDto> GetAllQuestionsByQuestionnaire(int questionnaireCode)
        {
            return QuestionnaireDal.GetAllQuestionsByQuestionnaire(questionnaireCode);
        }
        public static List<QuestionDto> GetAllQuestionsByQuestionnaireWithMix(int questionnaireCode)
        {
            var Questions= QuestionnaireDal.GetAllQuestionsByQuestionnaireWithMix(questionnaireCode);
            foreach (var item in Questions)
            {
                item.falseAnswer4 = item.trueAnswer;
                item.trueAnswer = "";
                string[] tmp1 = new string[4];
                tmp1[0] = item.falseAnswer1;
                tmp1[1] = item.falseAnswer2;
                tmp1[2] = item.falseAnswer3;
                tmp1[3] = item.falseAnswer4;
                Random rnd = new Random();
                int indexChange = rnd.Next(1, 4);
                string tmp = tmp1[0];
                tmp1[0] = tmp1[indexChange];
                tmp1[indexChange] = tmp;
                item.falseAnswer1 = tmp1[0];
                item.falseAnswer2 = tmp1[1];
                item.falseAnswer3 = tmp1[2];
                item.falseAnswer4 = tmp1[3];
            }
            return Questions;
        }

        public static List<QuestionnaireDto> GetAllquestionnaire()
        {
            return QuestionnaireDal.GetAllQuestionnaire();
        }
        public static List<QuestionnaireDto> GetAllQuestionnaireNotOpenNow()
        {
           return QuestionnaireDal.GetAllQuestionnaireNotOpenNow();
        }

        public static int GetQuestionnaireByPlay(int playCode)
        {
            return QuestionnaireDal.GetQuestionnaireByPlay(playCode);
        }
        public static string GetQuestionnaireNameByCode(int questionnaireCode)
        {
            return QuestionnaireDal.GetQuestionnaireNameByCode(questionnaireCode);
        }
    }
}
