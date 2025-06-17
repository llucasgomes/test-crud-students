using Students.Application.Services.AutoMapper;
using Students.Communication.Request;
using Students.Communication.Response;
using Students.Exception.ExceptionsBase;

namespace Students.Application.Usecase.Student.Register;
public class RegisterStudentUseCase
{

    public ResponseStudentJson Execute(RequestRegisterStudentJson req)
    {
        //1º Validar a request 
          Validate(req);

        //2º Mapear a request para a entidade
        var autoMapper = new AutoMapper.MapperConfiguration(opt =>
        {
            opt.AddProfile<AutoMapping>();
        }).CreateMapper();

        var studentDomain = autoMapper.Map<Domain.Entities.Student>(req);


        //3º Persistir a entidade no banco de dados
        var student = new ResponseStudentJson
          {
              Name = req.Name,
              Email = req.Email,
              Course = req.Course,
         
          };
        return student;
    }

    private void Validate(RequestRegisterStudentJson req)
    {
        var validator = new RegisterStudentValidator();
        var response = validator.Validate(req);

        if (!response.IsValid)
        {
            var erros = response.Errors.Select(e => e.ErrorMessage).ToList();
            throw new ErrorOnValidateException(erros);
        }
    }
}
