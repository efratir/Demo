using DAL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class PlayBL
    {
        //הוספה
        public static void Put(PlayDTO play)
        {

            PlayDal.UpdatePlay(play);
        }
        public static void Delete(int playCode)
        {

            PlayDal.DeletePlay(playCode);
        }
        public static PlayDTO Post(PlayDTO play)
        {

           return PlayDal.AddPlay(play);
        }
        public static List<PlayDTO> GetAll()
        {
            return PlayDal.GetAllPlay();
        }
        public static List<PlayDTO> GetAllPlayHappeningNow()
        {
            return PlayDal.GetAllPlayHappeningNow();
        }

        public static string whatId(string p)
        {
            return PlayDal.whatId(p);
        }

        public static int GetQuestionnaireCodeByName(string questionnaireName)
        {
            return PlayDal.GetQuestionnaireCodeByName(questionnaireName);
        }

        public static bool IfAgeMatch(int playCode,string dateOfBirth)
        {
            return PlayDal.IfAgeMatch(playCode, dateOfBirth);
        }



        //    public static PlayDTO GetPlay(string id)
        //    {
        //        return PlayDal.GetPlay(id);
        //    }
        //}
    }
}
