
using AutoMapper;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static partial class PlayDal
    {



        private static PlayDTO ConvertPlayEntityToDto(playTable p)
        {

            PlayDTO play = Mapper.Map<playTable, PlayDTO>(p);
            return play;
        }
        private static playTable ConvertplayDtoToEntity(PlayDTO play)
        {
            
            var b = Mapper.Map<PlayDTO, playTable>(play);
            return b;
        }
        public static PlayDTO AddPlay(PlayDTO play)
        {
            using (var db = new DBContext())
            {

                try
                {
                    foreach (var user in db.userTable)
                    {   int p=  Convert.ToInt32(user.password);
                        int p1 = Convert.ToInt32(play.userIdCreator);
                        if(p==p1)
                        {
                            play.userIdCreator = user.userId;
                        }
                    } 
                    var convertPlay = ConvertplayDtoToEntity(play);
                    db.playTable.Add(convertPlay);
                    db.SaveChanges();
                    return play;
                }
                catch (Exception e)
                {
                    return null;
                }

            }

        }

        public static string whatId(string p)
        {
            using (var db = new DBContext())
            {
                foreach(var user in db.userTable)
                {
                    int password = Convert.ToInt32(user.password);
                    int cp = Convert.ToInt32(p);
                    if(password==cp)
                    {
                        return user.userId;
                    }
                }
                return null;
            }
        }

        public static bool IfAgeMatch(int playCode, string dateOfBirth)
        {
            int d = DateTime.Today.Year;

            int converDateOfBirth = Convert.ToInt16(dateOfBirth);
            using (var db = new DBContext())
            {
                try
                {
                    var qC = db.playTable.Find(playCode).questionnaireCode;
                    var q = db.questionnaireTable.Find(qC);
                    if ((d - converDateOfBirth) > q.matchingFromAge && (d - converDateOfBirth) < q.matchingUntilAge)
                    {
                        return true;
                    }
                    else
                        return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }



        //public static PlayDTO GetPlay(string id)
        //{
        //    using (var db = new DBContext())
        //    {
        //        //var play=
        //    }


        //}

        public static int GetQuestionnaireCodeByName(string questionnaireName)
        {
            using (var db = new DBContext())
            {
                try
                {
                    foreach (var item in db.questionnaireTable)
                    {
                        if (item.questionnaireName == questionnaireName)
                        {
                            int x = item.questionnaireCode;
                            if (x.ToString() != null)
                                return x;
                            return 0;
                        }

                    }


                }
                catch (Exception e)
                {

                    return 0;
                }
                return 0;
            }
        }

        public static bool UpdatePlay(PlayDTO play)
        {



            using (var db = new DBContext())
            {


                // var p = db.playTable.Find(convertPlay.playCode);

                try
                {
                    var convertPlay = ConvertplayDtoToEntity(play);
                    db.playTable.AddOrUpdate(convertPlay);
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }


        }

        public static bool DeletePlay(int playCode)
        {

            using (var db = new DBContext())
            {
                try
                {
                    var objToRemove = db.playTable.Find(playCode);
                    db.playTable.Remove(objToRemove);
                    //var convertPlay = ConvertplayDtoToEntity(play);
                    //db.playTable.Remove(db.playTable.Find(convertPlay.playCode));
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }

        }



        public static List<PlayDTO> GetAllPlay()
        {

            using (var db = new DBContext())
            {
                try
                {
                    var a = db.playTable.ToList();
                    return Mapper.Map<List<PlayDTO>>(a);
                }
                catch (Exception e)
                {


                }


                //try
                //{

                //    var a = db.playTable.ToList();
                //    List<PlayDTO> playLst = new List<PlayDTO>();
                //    foreach (var item in a)
                //    {
                //        playLst.Add(ConvertPlayEntityToDto(item));
                //    }

                //    return playLst;

                //}
                //catch (Exception ex)
                //{

                //}
            }
            return null;
        }



        public static List<PlayDTO> GetAllPlayHappeningNow()
        {
            using (var db = new DBContext())
            {
                try
                {
                    DateTime NowTime = DateTime.Now;
                    DateTime e = DateTime.Today;
                    int nowMinute = NowTime.Minute;
                    List<playTable> edr = (db.playTable.Where(p => p.dateOfPlay == e
                    && p.hourOfstartJoiningToPlay.Hours <= NowTime.Hour 
                    && ((p.hourOfEndPlay.Hours > NowTime.Hour)|| (p.hourOfEndPlay.Hours == NowTime.Hour && nowMinute< p.hourOfEndPlay.Minutes) ) ).ToList());
                    return edr.Select(p => Mapper.Map<PlayDTO>(p)).ToList();
                }
                catch (Exception)
                {
                    return null;
                }

            }
        }
    }
}
