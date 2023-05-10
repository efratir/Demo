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
    public static partial class QuestionDal
    {
        public static QuestionDto AddQuestion(QuestionDto question)
        {
            using (var db = new DBContext())
            {

                try
                {
                    db.questionTable.Add(Mapper.Map<questionTable>(question));
                    db.SaveChanges();
                    return question;
                }
                catch (Exception)
                {
                    return null;
                }

            }

        }
        public static bool Updatequestion(QuestionDto question)
        {
            using (var db = new DBContext())
            {
                

                try
                {
                    // q.questionCode = question.questionCode;
                    // q.questionnaireCode = question.questionnaireCode;
                    // q.contentsOfQuestion = question.contentsOfQuestion;
                    // q.trueAnswer = question.trueAnswer;
                    // q.falseAnswer1 = question.falseAnswer1;
                    //q.falseAnswer2 = question.falseAnswer2;
                    // q.falseAnswer3 = question.falseAnswer3;
                    //q.pointAnswer = question.pointAnswer;

                    db.questionTable.AddOrUpdate(Mapper.Map<questionTable>(question));
                    db.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }

            }


        }
        public static bool Deletequestion(int questionCode)
        {

            using (var db = new DBContext())
            {
                try
                {
                    db.questionTable.Remove(db.questionTable.Find(questionCode));
                    db.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }

        }
       
    }
}

