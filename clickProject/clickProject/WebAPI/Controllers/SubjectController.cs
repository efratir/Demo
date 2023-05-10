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
    public class SubjectController : ApiController
    {
        // GET: api/Subject
        [HttpGet]
        public List<SubjectDto> GetAllSubject()
        {
            return SubjectBL.GetAllSubject();
        }

        // GET: api/Subject/5
        //[HttpGet]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Subject
        public void Post(SubjectDto subject)
        {

            SubjectBL.Post(subject);
        }

        // PUT: api/Subject/5
        //[HttpPut]
        //public void Put(SubjectDto subject)
        //{
        //    SubjectBL.Put(subject);
        //}

        // DELETE: api/Subject/5
        public void Delete(int id)
        {
        }
    }
}
