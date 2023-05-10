using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class QuestionnaireDto
    {
        //public int QuestionnaireCode { get; set; }
        //public int SubjectNameCode { get; set; }
        //public int MatchingFromAge { get; set; }
        //public int MatchingUntilAge { get; set; }
        //public string questionnaireName { get; set; }
        public int questionnaireCode { get; set; }
        public int subjectNameCode { get; set; }
        public int matchingFromAge { get; set; }
        public int matchingUntilAge { get; set; }
        public string questionnaireName { get; set; }
    }
}