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
    public class QuestionController : ApiController
    {
        // GET: api/Question
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}
       



        // PUT: api/Question/5
        [HttpPut]
        public void Update(QuestionDto question)
        {
            QuestionBL.Put(question);
        }

        // DELETE: api/Question/5
        [HttpPost]
        public void Remove ([FromBody]  int  questionCode)
        {
            QuestionBL.Delete(questionCode);
        }
        //public void Post(QuestionDto question)
        //{
        //    QuestionBL.Post(question);
        //}
        [HttpPost]
        public QuestionDto Add(QuestionDto question)
        {
          return  QuestionBL.Post(question);
        }

    }

}

