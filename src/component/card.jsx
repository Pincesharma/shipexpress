import React from 'react';

const card = [
  {
    image: "https://www.shipxpress.in/img/service/large-global-network.png",
    title: "Large Global Networks",
    about:
      "Covers over 27000+ pincodes & in 280+ cities and expanding rapidly. Lower return cost as compared to forward charges, plus maximum insurance coverage",
  },
  {
    image: "https://www.shipxpress.in/img/service/clock.svg",
    title: "Next Day Delivery",
    about:
      "Today's competitive world demands quick & fast delivery of products. our excellent management system enables us to provide next day fast delivery",
  },
  {
    image: "https://www.shipxpress.in/img/service/remittances.svg",
    title: "Quick Remittances",
    about:
      "Ship with us with no minimum commitments, Collect COD remittances twice in a week.Get a detailed history of remittances on your COD orders",
  },
  {
    image: "https://www.shipxpress.in/img/service/Fullfilment.svg",
    title: "Order Fullfilment",
    about:
      "Our warehouse management system is integrated with many demand channels and logistic partners. It is allowing clients to quickly scale operations.",
  },
  {
    image: "https://www.shipxpress.in/img/service/customer-service.svg",
    title: "Privileged Customer Service",
    about:
      "Single point resolution through dedicated account manager. Outsource Email & Chat Support.",
  },
  {
    image: "https://www.shipxpress.in/img/service/speedometer.svg",
    title: "Optimised Shipping Performance",
    about:
      "Achieve 20% faster deliveries Reduce shipping expenses up to 40% Increase successful delivery rate by 20% using our NDR validation feature",
  },
];

const Card = () => {
  return (
    <div className="py-10 px-6 md:px-12 bg-white my-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-3xl transition-all duration-300 ease-in-out transform animate-fade-up"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
              {item.about}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
