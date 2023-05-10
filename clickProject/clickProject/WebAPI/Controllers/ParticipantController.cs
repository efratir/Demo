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
    public class ParticipantController : ApiController
    {
        // GET: api/ParticipantDetails
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/ParticipantDetails/5
        //[HttpGet]
        // public List<ParticipantDto> GetParticipantByPlayCode(int playCode)
        //{
        //   return ParticipantBL.GetParticipantByPlayCode(playCode);
        // }
        [HttpGet]
        public bool IfTrueAnswer(string answerContext, string questionCode)
        {
                                                           
            int convertQuestionCode = Convert.ToInt32(questionCode);
            return ParticipantBL.IfTrueAnswer(answerContext, convertQuestionCode);

        }

        //POST: api/Participant

        [HttpPost]
        public ParticipantDto Post(ParticipantDto participantDetails)
        {
           
           return ParticipantBL.Post(participantDetails);
        }

        // PUT: api/ParticipantDetails/5
        [HttpPut]
        public void Put(ParticipantDto participantDetails)
        {
           // ParticipantBL.Put(participantDetails);
        }

        // DELETE: api/ParticipantDetails/5
        public void Delete(int id)
        {
        }
       

        [HttpGet]
        public List<PlayDTO> GetWhatCanBegin(string id)
        {
            return ParticipantBL.WhatCanBegin(id);
        }

        [HttpGet]
        [Route("api/Participant/WinnerForQuestoins/{playCode}")]
        public Dictionary<int, Dictionary<string, string>> WinnerForQuestoins(int playCode)
        {
            return ParticipantBL.WinnerForQuestoins(playCode);
        }
       
        [HttpGet]
        public List<string> EndWinner()
        {
            return ParticipantBL.EndWinner();
        }
      
    }
}
