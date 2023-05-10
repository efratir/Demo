using AutoMapper;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class MyMapper
    {


        public static void MyMapperFunc()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<playTable, PlayDTO>();
                cfg.CreateMap<subjectTable, SubjectDto>();
                cfg.CreateMap<participantTable, ParticipantDto>();
                cfg.CreateMap<questionnaireTable, QuestionnaireDto>();
                cfg.CreateMap<questionTable, QuestionDto>();
                cfg.CreateMap<userTable, UserDto>();



                cfg.CreateMap<PlayDTO, playTable>();
                cfg.CreateMap<SubjectDto, subjectTable>();
                cfg.CreateMap<ParticipantDto, participantTable>();
                cfg.CreateMap<QuestionnaireDto, questionnaireTable>();
                cfg.CreateMap<QuestionDto, questionTable>();
                cfg.CreateMap<UserDto, userTable>();

            });
            //    Mapper.Initialize(cfg =>
            //    {
            //        cfg.CreateMap<PlayDTO, playTable>();
            //        cfg.CreateMap<SubjectDto, subjectTable>();
            //        cfg.CreateMap<ParticipantDto, participantTable>();
            //        cfg.CreateMap<QuestionnaireDto, questionnaireTable>();
            //        cfg.CreateMap<QuestionDto, questionTable>();
            //        cfg.CreateMap<UserDto, userTable>();

            //    });
            //}
        }
    }
}
