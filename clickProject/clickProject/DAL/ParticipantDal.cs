using AutoMapper;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class ParticipantDal
    {
        private static Dictionary<string, decimal> winners = new Dictionary<string, decimal>();
        private static List<string> theEndWinners = new List<string>();

        //public static List<ParticipantDto> GetParticipantByPlayCode(int playCode)
        //{
        //    using (var db = new DBContext())
        //    {
        //        return db.participantTables.Where(p => p.playCode == playCode).ToList();

        //    }
        //}
        public static bool IfTrueAnswer(string answerContext, int questionCode)
        {
            using (var db = new DBContext())
            {
                try
                {
                    var q = db.questionTable.Find(questionCode);
                    if (answerContext == q.trueAnswer)
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
        public static ParticipantDto Post(ParticipantDto participantDetails)
        {
            using (var db = new DBContext())
            {

                var q = db.playTable.Find(participantDetails.playCode);

                try
                {


                    participantTable myParticipantDetails = Mapper.Map<participantTable>(participantDetails);

                    q.participantTable.Add(myParticipantDetails);


                    db.SaveChanges();
                    return Mapper.Map<ParticipantDto>(myParticipantDetails);
                }
                catch (Exception e)
                {
                    return null;
                }

            }
        }




        public static List<PlayDTO> WhatCanBegin(string id)
        {
            try
            {
                DateTime NowTime = DateTime.Now;
                DateTime e = DateTime.Today;
                List<PlayDTO> lstPlays = new List<PlayDTO>();
                using (var db = new DBContext())
                {
                    foreach (int playCode in db.participantTable.Where(x => x.participantId.ToString() == id).Select(a => a.playCode))
                    {
                        PlayDTO p = Mapper.Map<PlayDTO>(db.playTable.First(b => b.playCode == playCode));
                        if (p.dateOfPlay == e && p.hourOfstartJoiningToPlay.Hours <= NowTime.Hour && p.hourOfEndPlay.Hours >= NowTime.Hour)
                            lstPlays.Add(p);
                    }
                    return lstPlays;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
        public static Dictionary<int, Dictionary<string, string>> WinnerForQuestoins(int playCode)
        {
            decimal test;
            Dictionary<int, Dictionary<string, string>> lstWinInQuestion = new Dictionary<int, Dictionary<string, string>>();

            using (var db = new DBContext())
            {
                try
                {
                    var questions = db.participantTable.Where(b => b.playCode == playCode).Select(a => a.questoinCode).ToList().Distinct();
                    int index = 0;
                    Dictionary<string, string>[] lstWins = new Dictionary<string, string>[questions.Count()];
                    lstWins[index] = new Dictionary<string, string>();
                    foreach (var questoin in questions)
                    {
                        if (questoin != 0)
                        {
                            int? minTime = db.participantTable.Where(a => a.playCode == playCode && a.questoinCode == questoin && a.trueOrFalseAnswer == true)
                                .Min(b => b.timeOfRespond);
                            decimal pointsQuestion = db.questionTable.FirstOrDefault(a => a.questionCode == questoin).pointAnswer;
                            var tmp = db.participantTable.Where(a => a.playCode == playCode && a.questoinCode == questoin && a.trueOrFalseAnswer == true)
                                .Where(b => b.timeOfRespond == minTime)
                                .Select(c => new { c.userTable.userName, c.participantId }).ToList();
                            foreach (var user in tmp)
                            {
                                lstWins[index].Add(user.participantId, user.userName);
                                if (winners.TryGetValue(user.participantId, out test))
                                {
                                    winners[user.participantId] = winners[user.participantId] + pointsQuestion;
                                }
                                else
                                    winners.Add(user.participantId, pointsQuestion);
                            }
                            lstWinInQuestion.Add(questoin, lstWins[index++]);
                            lstWins[index] = new Dictionary<string, string>();
                        }
                    }
                   
                    return lstWinInQuestion;
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
        public static List<string> EndWinner()
        {
            try
            {
                decimal max = 0;


                foreach (var item in winners)
                {
                    if (item.Value > max)
                    {
                        max = item.Value;
                        theEndWinners.Clear();
                        theEndWinners.Add(item.Key);
                    }
                    else
                        if (item.Value == max)
                    {
                        theEndWinners.Add(item.Key);
                    }
                }
                return theEndWinners;
            }
            catch (Exception)
            {
                return null;
            }

        }

    }
}