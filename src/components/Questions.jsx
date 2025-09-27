import React from 'react'

const Questions = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "Q. When and where can I take a test drive?",
            answer: "With our test drive booking form, you can conveniently schedule a test drive at home or visit our hub to try out multiple cars. Once you book your preferred option, your relationship manager will call you to confirm the details before arriving at your location. To know more about home test drives, please click on the following  link .",
        },
        {
            question: "Q. What’s the process for booking my car?",
            answer: "You can book an Assured & Budget car of your liking for up to 5 days by placing a refundable deposit of Rs. 20,000. Similarly, for Spinny Max cars, it's Rs. 50,000. If you complete the vehicle purchase within the holding period, the deposit will be applied toward the purchase; otherwise, it will be refunded to you, and the booking will be cancelled.",
        },
        {
            question: "Q. Will Spinny help me with car finance?",
            answer: "Absolutely, buyers can choose to avail financing through Spinny wherein we would get the loan processed through our finance partners. Our established partnerships help us process loans faster and get our customers better interest rates. Depending on your credit worthiness, you can avail used car loans through Spinny at interest rates as low as 12.99% compared to the market rates of 14-16%.",
        },
        {
            question: "Q. How does Spinny's money back guarantee work?",
            answer: "At Spinny we are only happy when you’re happy. So if you don't absolutely love your new Spinny car you can return it back within 5 days and upto 300km of running (from the date of delivery) and your complete purchase amount will be refunded back to you within 7-9 working days, no-questions-asked.",
        },
    ];
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 md:px-0 mt-12">
    <h1 className="text-3xl font-semibold text-center">Frequently Asked Questions</h1>
    {faqs.map((faq, index) => (
        <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">
                    {faq.question}
                </h3>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out  ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                {faq.answer}
            </p>
        </div>
    ))}
</div>
  )
}

export default Questions