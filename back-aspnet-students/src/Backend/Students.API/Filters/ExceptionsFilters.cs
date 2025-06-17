using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Students.Communication.Response;
using Students.Exception;
using Students.Exception.ExceptionsBase;

namespace Students.API.Filters;

public class ExceptionsFilters: IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is StudentsException)
        {
            HandleProjectException(context);
        }
        else
        {
            
        }

    }

    private void HandleProjectException(ExceptionContext context)
    {


        if (context.Exception is ErrorOnValidateException)
        {
            var exception = context.Exception as ErrorOnValidateException;
            //resolver o status code
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;

            //agora iremos resolver o retorno( monte de linha de codigo)
            // que o cliente nao vai querer ver isso
            context.Result = new BadRequestObjectResult(new ResponseErrorJson(exception.ErrorMessages));
        }

    }

    private void ThrowUnknowException(ExceptionContext context)
    {


        if (context.Exception is ErrorOnValidateException)
        {
            var exception = context.Exception as ErrorOnValidateException;
            //resolver o status code
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            //agora iremos resolver o retorno( monte de linha de codigo)
            // que o cliente nao vai querer ver isso
            context.Result = new ObjectResult(ResourceMessagesExeception.UNKNOWN_ERROR);
        }

    }
}
