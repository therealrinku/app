export interface TripDataModel {
  group: [
    {
      id: string
      groupName: string
      groupWebsite: string
      groupType: string
      reservation: string
      insuranceSupplier: string
      roomCategories: [];
      dateCreated: string
      groupSupplier: string
      groupCommissionPercentage: number;
    }
  ];
  room: [
    {
      id: string
      roomName:string
      travelDate: string
      travelStartDate: string
      travelEndDate: string
      travelNights: number;
      totalPackageAmount: string
      totalPaidToTZ: string
      depositChecked: string;
      balanceChecked: string;
      remainingBalance: string
      supplier: string
      finalPaymentDue: string
      insuranceSupplier: string
      transferCompany: string
      destination: string
      roomType: string
      transferInfo: string
      agentId: string
      origin: string
      vacationType: string
      weddingDate2: string
      weddingDate: string
      daysTillTravel: number,
      daysTillFinalPaymentDue: number,
      roomStatus:string
      tzTransfer:string
      transferType: string
      tzPackage: string
      bookingNumber: string
      ptidPricingType: string
    }
  ];
  hotel: [
    {
      id: string
      hotelName: string
      hotelAddress: string
      hotelPhone: string;
      hotelImage: string
      hotelFrontDeskPhone: string
      hotelFrontDeskEmail: string;
      hotelDescription: string
      hotelPositives: string;
      hotelCodes: {
        hbsi: string;
        bedsonline: string;
        vax: string
      };
      preferredSuppler: string
      supplierCommissionList: string
    }
  ];
  travelers: [
    {
      id: string
      firstName: string
      middleName: string;
      lastName: string
      phone: string
      email: string
      birthdate: string
      age:number
      amountPaid: string;
      purchasedInsurance: string
      gender: string
      status: string
    }
  ];
  payments: [
    {
      paymentID:string
      paymentToken: string
      paymentAmount: string
      paymentType: string
      creditCardOwner: string
      paymentDate: string
      last4: string
      stripeReceipt: string;
    }
  ];
  transfer: [
    {
      transferCompanyName: string;
      transferCompanyDescription: string;
      transferImageLink: string;
      transferImageDescription: string;
      transferCompanyPhone: string;
      transferCompanyEmail: string;
    }
  ];
  agent: {
    id: string
    agentName: string
    agentFirstName: string
    agentPhoneWork: string
    agentPhoneMobile: string;
    agentEmail: string
  };
}
