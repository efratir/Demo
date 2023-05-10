using AutoMapper;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static partial class SubjectDal
    {
        public static bool AddSubject(SubjectDto Subject)
        {
            using (var db = new DBContext())
            {

                try
                {
              
                     db.subjectTable.Add(Mapper.Map<subjectTable>(Subject));
                    db.SaveChanges();
                    return true;
                }

                catch (Exception)
                {
                    return false;
                }

            }


        }

        public static List<SubjectDto> GetAllSubject()
        {
            {

                using (var db = new DBContext())
                {
                    try
                    {
                        var a = db.subjectTable.ToList();
                        var x= Mapper.Map<List<SubjectDto>>(a);

                        return x;

                    }
                    catch (Exception ex)
                    {
                        
                    }
                }
                return null;
            }
        }
    }
}
