using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class QuestionDto
    {
        //public int QuestionCode { get; set; }
        //public int QuestionnaireCode { get; set; }
        //public string ContentsOfQuestion { get; set; }
        //public string TrueAnswer { get; set; }
        //public string FalseAnswer1 { get; set; }
        //public string FalseAnswer2 { get; set; }
        //public string FalseAnswer3 { get; set; }
        //public int PointAnswer { get; set; }
        public int questionCode { get; set; }
        public int questionnaireCode { get; set; }
        public string contentsOfQuestion { get; set; }
        public string trueAnswer { get; set; }
        public string falseAnswer1 { get; set; }
        public string falseAnswer2 { get; set; }
        public string falseAnswer3 { get; set; }
        public string falseAnswer4 { get; set; }
        public Nullable<decimal> pointAnswer { get; set; }
    }
}
