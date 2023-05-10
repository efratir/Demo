using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Entities.DTO;

namespace BL
{
    public class ParticipantBL
    {
        //public static List<ParticipantDto> GetParticipantByPlayCode(int playCode)
        //{
        //  return ParticipantDal.GetParticipantByPlayCode(playCode);
        // }
        public static void Put(ParticipantDto participantDetails)
        {
           // ParticipantDal.Put(participantDetails);
        }
        public static ParticipantDto Post(ParticipantDto participantDetails)
        {
           return ParticipantDal.Post(participantDetails);
        }

        public static List<PlayDTO> WhatCanBegin(string id)
        {
          return  ParticipantDal.WhatCanBegin(id);
        }

        public static bool IfTrueAnswer(string answerContext, int questionCode)
        {
            return ParticipantDal.IfTrueAnswer(answerContext, questionCode);
        }

        public static Dictionary<int, Dictionary<string, string>> WinnerForQuestoins(int playCode)
        {
            return ParticipantDal.WinnerForQuestoins(playCode);
        }

     
        public static List<string> EndWinner()
        {
            return ParticipantDal.EndWinner( );
        }
    }
}
