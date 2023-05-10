using BL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{  /* [RoutePrefix("api/Play")]*/
    public class PlayController : ApiController
    {
        // GET: api/Play
        [HttpGet]
        //[Route ("api/PlayController/GetAll")]
        public List<PlayDTO> GetAll()
        {
            return PlayBL.GetAll();
        }
        [HttpGet]
        public List<PlayDTO> GetAllPlayHappeningNow()
        {
            return PlayBL.GetAllPlayHappeningNow();
        }

      
        //[HttpGet]
        // GET:FAFAFDD api/Play/5


        //[Route("api/Play/GetQuestionnaireNameByCode/{QuestionnaireCode}")]
        //[HttpGet, HttpPost]
        //public  string GetQuestionnaireNameByCode(int QuestionnairCode)
        //{

        //    return PlayBL.GetQuestionnaireNameByCode(QuestionnairCode);
        //}



        [Route("api/Play/GetQuestionnaireCodeByName/{QuestionnaireName}")]
        public int GetQuestionnaireCodeByName(string QuestionnaireName)
        {
            return PlayBL.GetQuestionnaireCodeByName(QuestionnaireName);
        }
        // [HttpGet]


        // POST: api/Play
        [HttpPost]
        //[Route("api/PlayController/Post")]
        public PlayDTO Add(PlayDTO play)
        {
            play.dateOfPlay = play.dateOfPlay.AddDays(1);
            //TimeSpan y = new TimeSpan(DateTime.Now.Hour, DateTime.Now.Minute, DateTime.Now.Second);
            //string [] x = play.HourOfstartJoiningToPlay.Split('T');
            //string[] x1 = x[1].Split('.');
            //string[] y = play.HourOfstartPlay.Split('T');
            //string[] y1 = y[1].Split('.');
            //string[] z = play.HourOfEndPlay.Split('T');
            //string[] z1 = z[1].Split('.');
            //play.HourOfstartJoiningToPlay = x1[0];
            //play.HourOfstartPlay = y1[0];
            //play.HourOfEndPlay = z1[0];
            //var x= y.Hours;
            return PlayBL.Post(play);
        }
        [HttpPut]
        // PUT: api/Play/5
        public void Put(PlayDTO play)
        {
            PlayBL.Put(play);
        }

        // DELETE: api/Play/5
        [HttpPost]
        // [Route("api/PlayController/Delete")]
        public void Remove([FromBody]   int playCode)
        {
            PlayBL.Delete(playCode);
        }
        //public PlayDTO GetPlay(string id)
        // {
        //     return PlayBL.GetPlay(id);
        // }
        [HttpGet]
        public bool IfAgeMatch(string playCode, string dateOfBirth)
        {
            int convertPlayCode = Convert.ToInt32(playCode);
            return PlayBL.IfAgeMatch(convertPlayCode, dateOfBirth);
        }
        [HttpGet]
        public string whatId(string p)
        {
            
            return PlayBL.whatId(p.ToString());
        }
    }
}
