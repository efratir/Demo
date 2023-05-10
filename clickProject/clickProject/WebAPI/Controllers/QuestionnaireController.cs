using BL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class QuestionnaireController : ApiController
    {
        // GET: api/Questionnaire
        [HttpGet]
        public List<QuestionnaireDto> GetAllQuestionnaire()
        {
            return QuestionnaireBL.GetAllquestionnaire();
        }
        [HttpGet]
        public List<QuestionnaireDto> GetAllQuestionnaireNotOpenNow()
        {
            return QuestionnaireBL.GetAllQuestionnaireNotOpenNow();
        }






        [Route("api/Questionnaire/GetAllQuestionsByQuestionnaire/{questannaireCode}")]
        public List<QuestionDto> GetAllQuestionsByQuestionnaire(int questannaireCode)
        {
            return QuestionnaireBL.GetAllQuestionsByQuestionnaire(questannaireCode);
        }



       
        [Route("api/Questionnaire/GetAllQuestionsByQuestionnaireWithMix/{questannaireCode}")]
        public List<QuestionDto> GetAllQuestionsByQuestionnaireWithMix(int questannaireCode)
        {
            return QuestionnaireBL.GetAllQuestionsByQuestionnaireWithMix(questannaireCode);
        }

        // GET: api/Questionnaire/5
        [Route("api/Questionnaire/GetQuestionnaireByPlay/{playCode}")]
        public int GetQuestionnaireByPlay(int playCode)
        {
            return QuestionnaireBL.GetQuestionnaireByPlay(playCode);
        }
        [HttpPost]
        public void Remove([FromBody]  int questionnaireCode)
        {
            QuestionnaireBL.Delete(questionnaireCode);
        }

        //// POST: api/Questionnaire
        [HttpPost]
        public QuestionnaireDto Update(QuestionnaireDto questionnaire)
        {

            return QuestionnaireBL.Post(questionnaire);
        }
        //DELETE: api/Questionnaire/5


        // PUT: api/Questionnaire/5
        [HttpPut]
        public void Put(QuestionnaireDto questionnaire)
        {
            QuestionnaireBL.Put(questionnaire);
        }


        [Route("api/Questionnaire/GetQuestionnaireNameByCode/{QuestionnaireCode}")]
        public string GetQuestionnaireNameByCode(int QuestionnaireCode)
        {

            return QuestionnaireBL.GetQuestionnaireNameByCode(QuestionnaireCode);
        }



    }
}
