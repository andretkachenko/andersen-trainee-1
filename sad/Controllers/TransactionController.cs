﻿using AndersenTrainee1.Services;
using AndersenTrainee1.Domain;
using System.Collections.Generic;
using System.Web.Http;

namespace AndersenTrainee1.Controllers
{
    [Route("api/transaction")]
    public class TransactionController : ApiController
    {
        private TransactionService transactionService;

        public TransactionController()
        {
            this.transactionService = new TransactionService();
        }

        //GET: api/transaction
        [HttpGet]
        public List<Transaction> Get()
        {
            return transactionService.Get();
        }

        //GET: api/transaction/5
        [HttpGet]
        public Transaction Get(int id)
        {
            return transactionService.Get(id);
        }

        //GET: api/transaction/customer/5
        [Route("api/transaction/customer")]
        [HttpGet]
        public List<Transaction> GetByCustomer(int id)
        {
            return transactionService.GetByCustomerId(id);
        }

        //GET: api/transaction/wallet/5
        [Route("api/transaction/wallet")]
        [HttpGet]
        public List<Transaction> GetByWallet(int id)
        {
            return transactionService.GetByWalletId(id);
        }

        //POST: api/transaction
        [HttpPost]
        public void Post(Transaction transaction)
        {
            transactionService.Create(transaction);
        }
    }
}