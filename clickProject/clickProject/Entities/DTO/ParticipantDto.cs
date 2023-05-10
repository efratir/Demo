using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class ParticipantDto
    {
        //public int ParticipantId { get; set; }
        //public DateTime ParticipantDateOfBirth { get; set; }
        //public int PlayCode { get; set; }
        //public int QuestoinCode { get; set; }
        //public bool TrueOrFalseAnswer { get; set; }
        //public int TimeOfRespond { get; set; }
        public string participantId { get; set; }
        public int playCode { get; set; }
        public int questoinCode { get; set; }
        public bool trueOrFalseAnswer { get; set; }
        public int timeOfRespond { get; set; }
    }
}
