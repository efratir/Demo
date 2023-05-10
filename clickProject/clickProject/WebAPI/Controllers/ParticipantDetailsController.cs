using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class ParticipantDetailsController : ApiController
    {
        // GET: api/ParticipantDetails
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ParticipantDetails/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ParticipantDetails
        public void Post([FromBody]string value)
        {

        }

        // PUT: api/ParticipantDetails/5
        // public void Put(ParticipantDetailsDto participantDetails)
        // {
          //ParticipantDetailsBL.Put(participantDetails);
        // }

        // DELETE: api/ParticipantDetails/5
        public void Delete(int id)
        {
        }
    }
}
