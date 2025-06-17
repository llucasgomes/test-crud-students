using System.ComponentModel.DataAnnotations;
using Students.Communication.Request;
using Students.Communication.Response;
using Students.Exception.ExceptionsBase;

namespace Students.Application.Usecase.Student.Register;
public class RegisterStudentUseCase
{

    public ResponseStudentJson Execute(RequestRegisterStudentJson req)
    {
      Validate(req);

      var student = new ResponseStudentJson
      {
          Id = Guid.NewGuid().ToString(),
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
