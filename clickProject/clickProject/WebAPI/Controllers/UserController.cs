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
    public class UserController : ApiController
    {
        // GET: api/User
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/User/5
        [HttpGet]
        public UserDto isExist(string id)
        {
            return UserBL.isExist(id);
        }

        // POST: api/User
        [HttpPost]
        public UserDto Post(UserDto user)/*[FromBody]UserDto user*/
        {
            if (user.participantDateOfBirth != null)
            {
                user.participantDateOfBirth = user.participantDateOfBirth.Value.AddDays(1);
            }       
            
           return UserBL.post(user);
        }

        // PUT: api/User/5
        [HttpPut]
        public void Put([FromBody]UserDto user)
        {
            //UserBL.Put(user);
        }

        // DELETE: api/User/5
        [HttpDelete]
        public void Delete(int id)
        {
        }
    }
}
