using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
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
            ThrowUnknowException(context);
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

        if (context.Exception is DbUpdateException dbUpdateEx &&
        dbUpdateEx.InnerException is SqliteException sqliteEx)
        {
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            if (sqliteEx.SqliteErrorCode == 5) // database is locked
            {
                context.Result = new ObjectResult("O banco de dados está temporariamente bloqueado. Tente novamente.");
            }
            else
            {
                context.Result = new ObjectResult("Erro no banco de dados. Contate o administrador.");
            }

            return;

        }

        // Tratamento padrão
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Result = new ObjectResult(ResourceMessagesExeception.UNKNOWN_ERROR);

    }
}
