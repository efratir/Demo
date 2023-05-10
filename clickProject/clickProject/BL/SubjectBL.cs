using DAL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class SubjectBL
    {
        
        public static List<SubjectDto> GetAllSubject()
        {
            return SubjectDal.GetAllSubject();
        }

        public static void Post(SubjectDto subject)
        {
            SubjectDal.AddSubject(subject);
        }
    }
}
