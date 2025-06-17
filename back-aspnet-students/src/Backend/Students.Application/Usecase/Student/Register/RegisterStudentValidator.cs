using FluentValidation;
using Students.Communication.Request;
using Students.Exception;

namespace Students.Application.Usecase.Student.Register;
public class RegisterStudentValidator: AbstractValidator<RequestRegisterStudentJson>
{
    public RegisterStudentValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage(ResourceMessagesExeception.NAME)
            .Length(2, 100).WithMessage(ResourceMessagesExeception.NAME_LENGHT);
        RuleFor(x => x.Email)
            .NotEmpty().WithMessage(ResourceMessagesExeception.EMAIL)
            .EmailAddress().WithMessage(ResourceMessagesExeception.EMAIL_FORMAT);
        RuleFor(x => x.Course)
            .NotEmpty().WithMessage(ResourceMessagesExeception.COURSE)
            .Length(2, 100).WithMessage(ResourceMessagesExeception.COURSE_LENGHT);
       
    }
}
