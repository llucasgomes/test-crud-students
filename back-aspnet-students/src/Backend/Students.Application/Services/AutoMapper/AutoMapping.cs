using AutoMapper;
using Students.Communication.Request;
using Students.Domain.Entities;

namespace Students.Application.Services.AutoMapper;
public class AutoMapping: Profile
{
    public AutoMapping()
    {
        RequestToDomain();
    }
    private void RequestToDomain()
    {
                       
        CreateMap<
            RequestRegisterStudentJson,  //De onde vem...? (Requisição)
            Student               //Para onde vai...? (Entidade)
            >();
    }
}
