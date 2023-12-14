using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logics.API.Domain.Helpers.Enums
{
   public class Enum
    {
        public enum enumActivityType
        {
            CaseAccount = 50,
            NewFileUploaded = 204
        }
        public enum enumPaymentType
        {
            [Display(Name = "Credit Card")]
            CreditCard = 1,
            Checking = 2,
            Cash = 3,
            Refund = 4,
            Offset = 5,
            [Display(Name = "Charge Back")]
            ChargeBack = 6,
            Loan = 7
        }

        public enum enumCCType
        {
            Visa = 1,
            MasterCard = 2,
            AmExp = 3,
            Discover = 4
        }
        public enum enumAccountType
        {
            [Display(Name = "Checking Account")]
            Checking = 1,
            [Display(Name = "Credit Card")]
            CreditCard = 2,
            [Display(Name = "Savings Account")]
            Savings = 3,
            [Display(Name = "Business Checking Account")]
            BusinessChecking = 4
        }
        public enum MessageType
        {
            Unknown = 0,
            Notification = 1,
            CaseEmail = 2,
            CaseFax = 3,
            Esign = 4,
            Ticketing=5,
        }
        public enum UploadType
        {
            CaseDocument = 1
        }
        public enum enumDepartments
        {
            Case = 1,
            Billing = 2,
            Support = 3,            
            Other = 4
        }
        public enum enumTicketStatus
        {
            Open = 1,
            Closed = 2,
            Pending = 3,
        }
        public enum enumDirection
        {
            Inbound = 0,
            Outbound = 1
        }        
    }
}
    