using AutoMapper;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static partial class QuestionnaireDal
    {
        public static QuestionnaireDto AddQuestionnaire(QuestionnaireDto Questionnaire)
        {
            using (var db = new DBContext())
            {

                try
                {

                    db.questionnaireTable.Add(Mapper.Map<questionnaireTable>(Questionnaire));
                    db.SaveChanges();

                    return Mapper.Map<QuestionnaireDto>(Questionnaire);
                }
                catch (Exception e)
                {
                    return null;
                }

            }

        }
        public static bool UpdateQuestionnaire(QuestionnaireDto Questionnaire)
        {
            using (var db = new DBContext())
            {
                // var q = db.questionnaireTable.Find(Questionnaire.questionnaireCode);
                try
                {

                    //  q.questionnaireCode = Questionnaire.questionnaireCode;
                    //  q.subjectNameCode = Questionnaire.subjectNameCode;
                    // q.matchingFromAge = Questionnaire.matchingFromAge;
                    // q.matchingUntilAge = Questionnaire.matchingUntilAge;
                    // db.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }

            }


        }

        public static int GetQuestionnaireByPlay(int playCode)
        {
            using (var db = new DBContext())
            {
                try
                {
                    return db.playTable.Find(playCode).questionnaireCode;
                }
                catch (Exception e)
                {

                    return 0;
                }
            }


        }

        public static List<QuestionnaireDto> GetAllQuestionnaireNotOpenNow()
        {
            try
            {
                var db = new DBContext();
                List<questionnaireTable> lstQuestionnaireTable = new List<questionnaireTable>();
                foreach (var item in db.questionnaireTable)
                {
                    if (!db.playTable.Where(b => b.dateOfPlay >= DateTime.Today).Any(a => a.questionnaireCode == item.questionnaireCode))
                        lstQuestionnaireTable.Add(item);
                }
                int countOflstQuestionnaireTable = lstQuestionnaireTable.Count();
                questionnaireTable ss = lstQuestionnaireTable[countOflstQuestionnaireTable - 1];
                lstQuestionnaireTable[countOflstQuestionnaireTable - 1] = lstQuestionnaireTable[0];
                lstQuestionnaireTable[0] = ss;
                return Mapper.Map<List<QuestionnaireDto>>(lstQuestionnaireTable);
            }
            catch (Exception)
            {
                return null;
            }
        }
        public static bool Deletequestionnaire(int QuestionnaireCode)
        {

            using (var db = new DBContext())
            {
                try
                {
                    var questions = db.questionTable.RemoveRange(db.questionTable.Where(q => q.questionnaireCode == QuestionnaireCode));
                    db.questionnaireTable.Remove(db.questionnaireTable.Find(QuestionnaireCode));
                    db.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }

            }

        }
        public static List<QuestionnaireDto> GetAllQuestionnaire()
        {
            using (var db = new DBContext())
            {
                try
                {

                    var questannaire = db.questionnaireTable.ToList();
                    return Mapper.Map<List<QuestionnaireDto>>(questannaire);
                }
                catch (Exception)
                {


                }
                return null;

            }
        }
        public static List<QuestionDto> GetAllQuestionsByQuestionnaireWithMix(int questionnaireCode)
        {
            using (var db = new DBContext())
            {
                try
                {
                    var Questions = Mapper.Map<List<QuestionDto>>(db.questionTable.Where(q => q.questionnaireCode == questionnaireCode)).ToList();
                    return (Questions);
                }
                catch (Exception)
                {
                    return null;
                }
            }

        }
        public static List<QuestionDto> GetAllQuestionsByQuestionnaire(int questionnaireCode)
        {
            using (var db = new DBContext())
            {
                try
                {
                    var Questions = Mapper.Map<List<QuestionDto>>(db.questionTable.Where(q => q.questionnaireCode == questionnaireCode)).ToList();

                    return (Questions);
                }

                catch (Exception)
                {
                    return null;
                }
            }

        }
        public static string GetQuestionnaireNameByCode(int questionnaireCode)
        {
            using (var db = new DBContext())
            {
                try
                {

                    string x = db.questionnaireTable.Find(questionnaireCode).questionnaireName;
                    if (x != null)
                        return x;
                    return "";
                }
                catch (Exception e)
                {
                    return "";
                }
            }
        }
    }

}

