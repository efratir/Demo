using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class PlayDTO
    {
        //public int PlayCode { get; set; }
        //public int QuestionnaireCode { get; set; }
        //public DateTime DateOfPlay { get; set; }
        //public string HourOfstartJoiningToPlay { get; set; }
        //public string HourOfstartPlay { get; set; }
        //public string HourOfEndPlay { get; set; }
        //public string UserPassword { get; set; }
        //public string NameOfPlay { get; set; }
        public int playCode { get; set; }
        public int questionnaireCode { get; set; }
        public System.DateTime dateOfPlay { get; set; }
        public System.TimeSpan hourOfstartJoiningToPlay { get; set; }
        public System.TimeSpan hourOfstartPlay { get; set; }
        public System.TimeSpan hourOfEndPlay { get; set; }
        public string userIdCreator { get; set; }
        public string nameOfPlay { get; set; }
    }
}


