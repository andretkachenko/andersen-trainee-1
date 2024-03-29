﻿using System;
using AndersenTrainee1.Extensions;

namespace AndersenTrainee1.Domain.ADONet
{
    public class Customer : BaseEntity
    {
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Phone { get; set; }
        public string eMail { get; set; }

        public override string TableName()
        {
            return "Customers";
        }

        public override string SqlValuesString()
        {
            return $"\'{this.FirstName}\', \'{this.Surname}\', \'{this.BirthDate.ToDbDate()}\', \'{this.Phone}\', \'{this.eMail}\'";
        }

        public override string SqlKeysString()
        {
            return "FirstName, Surname, BirthDate, Phone, eMail";
        }

        public override string SqlUpdateString()
        {
            return $"UPDATE {this.TableName()} " +
                   $"SET Surname=\'{this.Surname}\', FirstName=\'{this.FirstName}\', BirthDate=\'{this.BirthDate.ToDbDate()}\', Phone=\'{this.Phone}\', eMail=\'{this.eMail}\' " +
                   $"WHERE Id={Id};";
        }
    }
}