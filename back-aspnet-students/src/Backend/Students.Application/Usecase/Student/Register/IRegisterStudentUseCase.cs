using Students.Communication.Request;
using Students.Communication.Response;

namespace Students.Application.Usecase.Student.Register;
public interface IRegisterStudentUseCase
{
    public  Task<ResponseStudentJson> Execute(RequestRegisterStudentJson req);
}
