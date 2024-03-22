import {
  ComputerFraud,
  CyberStalking,
  DuiDwi,
  Emblezzment,
  ExpungingRecords,
  FederalCrimesTrials,
  HealthcareFraud,
  InsiderTrading,
  InsuranceFraud,
  InternetFraud,
  IrsViolations,
  MortgageFraud,
  TelemarketingFraud,
  TradeSecretTheft,
  WhiteCollarCrimes,
  AntitrustViolations,
  Conspiraces,
  DrugTrafficking,
  EnviromentalLawViolations,
  FederalCriminalAppeals,
  Kickbacks,
  RicoCases,
  SexCrimes,
  Bribery,
  BusinessFraud,
  AssetForfeiture,
  BankFraud,
  BankruptcyFraud,
  Counterfeiting,
  CreditCardFraud,
  DrugCases,
  GovernmentFraud,
  InternationalCrimes,
  InternationalExtradition,
  MoneyLaundering,
  SecurityViolation,
  StateFelonyAppeals,
  StateFelonyTrials,
  FinancialFraud,
  MailFraud,
} from "./images";

export type PracticeAreaProps = {
  _id: string;
  label: string;
  imageUrl: string;
  colSpan: number;
  rowSpan: number;
  description?: string;
};

export const PRACTICE_AREAS: PracticeAreaProps[] = [
  {
    _id: "1",
    label: "Antitrust Violations",
    imageUrl: AntitrustViolations,
    colSpan: 1,
    rowSpan: 2,
    description:
      "Antitrust law focuses on ensuring fair competition in the market. This area involves cases related to monopolies, price fixing, and other practices that hinder competitive market conditions.",
  },
  {
    _id: "2",
    label: "Asset Forfeiture",
    imageUrl: AssetForfeiture,
    colSpan: 1,
    rowSpan: 4,
    description:
      "Asset forfeiture involves the legal process where the government seizes assets connected to criminal activity. This practice aims to disrupt criminal enterprises by depriving them of their resources.",
  },
  {
    _id: "3",
    label: "Bank Fraud",
    imageUrl: BankFraud,
    colSpan: 1,
    rowSpan: 2,
    description:
      "Bank fraud covers illegal activities aimed at deceiving financial institutions or obtaining money, assets, or other property owned or held by financial institutions through fraudulent means.",
  },
  {
    _id: "4",
    label: "Bankruptcy Fraud",
    imageUrl: BankruptcyFraud,
    colSpan: 2,
    rowSpan: 2,
    description:
      "Bribery involves offering, giving, receiving, or soliciting something of value as a means of influencing the actions of an individual holding a public or legal duty.",
  },
  {
    _id: "5",
    label: "Bribery",
    imageUrl: Bribery,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This area deals with fraud in the context of bankruptcy proceedings. It includes hiding assets, making false statements, and other deceitful practices intended to manipulate the bankruptcy process.",
  },
  {
    _id: "6",
    label: "Business Fraud",
    imageUrl: BusinessFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Business fraud encompasses deceptive practices in commerce, including false advertising, misrepresentation, and other unethical business practices intended to gain an unfair advantage.",
  },
  {
    _id: "7",
    label: "Computer Fraud",
    imageUrl: ComputerFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Computer fraud involves criminal activities that use technology, particularly computers, to access sensitive information, conduct fraudulent transactions, or manipulate digital data.",
  },
  {
    _id: "8",
    label: "Conspiracies",
    imageUrl: Conspiraces,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This area involves the legal aspects of planning or agreeing to commit a criminal act. It includes a wide range of activities where two or more parties conspire to commit a crime.",
  },
  {
    _id: "9",
    label: "Counterfeiting",
    imageUrl: Counterfeiting,
    colSpan: 1,
    rowSpan: 2,
    description:
      "Counterfeiting relates to the creation of imitations of genuine items, primarily currency and documents, to deceive others into believing they are authentic.",
  },
  {
    _id: "10",
    label: "Credit Card Fraud",
    imageUrl: CreditCardFraud,
    colSpan: 2,
    rowSpan: 2,
    description:
      "Credit card fraud includes various illegal activities involving the unauthorized use of credit cards to fraudulently obtain funds, goods, or services.",
  },
  {
    _id: "11",
    label: "Cyberstalking",
    imageUrl: CyberStalking,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Cybercrime encompasses criminal activities conducted via the internet or other electronic networks. It includes hacking, identity theft, online fraud, and other computer-related crimes.",
  },
  {
    _id: "12",
    label: "Drug Cases",
    imageUrl: DrugCases,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Drug cases involve legal proceedings related to the possession, distribution, manufacturing, and use of controlled substances. This area includes defense and prosecution in cases involving illegal drugs, prescription medication violations, and related offenses.",
  },
  {
    _id: "13",
    label: "Drug Trafficking",
    imageUrl: DrugTrafficking,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Drug trafficking encompasses cases involving the illegal distribution, sale, and transportation of controlled substances. It includes international and domestic smuggling, distribution networks, and related criminal activities.",
  },
  {
    _id: "14",
    label: "DUI/DWI",
    imageUrl: DuiDwi,
    colSpan: 1,
    rowSpan: 1,
    description:
      "DUI (Driving Under Influence) and DWI (Driving While Intoxicated) refer to offenses involving operating a vehicle under the influence of alcohol or drugs. This area includes legal proceedings, defense strategies, and penalties associated with these offenses.",
  },
  {
    _id: "15",
    label: "Embezzlement",
    imageUrl: Emblezzment,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Embezzlement refers to the fraudulent appropriation of funds or property entrusted to one's care but owned by someone else. This area covers cases of misappropriation of funds, financial misconduct, and breach of fiduciary duties.",
  },
  {
    _id: "16",
    label: "Environmental Law Violations",
    imageUrl: EnviromentalLawViolations,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Environmental law violations encompass legal cases related to the breach of environmental regulations and standards. This includes pollution, illegal waste disposal, wildlife protection violations, and non-compliance with environmental policies.",
  },
  {
    _id: "17",
    label: "Expunging Records",
    imageUrl: ExpungingRecords,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Expunging records involves the legal process of sealing or erasing criminal records from public view. It includes navigating the legal criteria and procedures for clearing one's criminal history in eligible cases.",
  },
  {
    _id: "18",
    label: "Federal Criminal Appeals",
    imageUrl: FederalCriminalAppeals,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Federal criminal appeals involve challenging convictions or sentences in federal criminal cases to a higher court. This area focuses on appellate procedure, legal argumentation, and review of trial court proceedings.",
  },
  {
    _id: "19",
    label: "Federal Criminal Trials",
    imageUrl: FederalCrimesTrials,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Federal criminal trials refer to the adjudication of criminal cases within the federal court system. It encompasses the prosecution and defense of crimes under federal law, including the trial process, evidence, and legal standards.",
  },
  {
    _id: "20",
    label: "Financial Fraud",
    imageUrl: FinancialFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Financial fraud involves illegal acts characterized by deceit or concealment in financial transactions. This includes embezzlement, Ponzi schemes, securities fraud, and other types of financial malpractice.",
  },
  {
    _id: "21",
    label: "Government Fraud",
    imageUrl: GovernmentFraud,
    colSpan: 2,
    rowSpan: 2,
    description:
      "Government fraud covers illegal acts involving fraudulent activities against government agencies. This includes misuse of government funds, procurement fraud, health care fraud against government programs, and other corrupt practices.",
  },
  {
    _id: "22",
    label: "Healthcare Fraud",
    imageUrl: HealthcareFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Healthcare fraud includes fraudulent activities in the healthcare system, such as billing for services not rendered, upcoding, kickbacks, and other illegal practices aimed at illicit financial gain.",
  },
  {
    _id: "23",
    label: "Insider Trading",
    imageUrl: InsiderTrading,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Insider trading refers to the illegal practice of trading on the stock exchange to one's own advantage through having access to confidential information. It involves the breach of fiduciary duty and misuse of internal information.",
  },
  {
    _id: "24",
    label: "Insurance Fraud",
    imageUrl: InsuranceFraud,
    colSpan: 1,
    rowSpan: 2,
    description:
      "Insurance fraud entails false claims or deceptive practices in the insurance process. This includes exaggerating claims, falsifying medical history, car insurance fraud, and other fraudulent insurance activities.",
  },
  {
    _id: "25",
    label: "IRS Violations",
    imageUrl: IrsViolations,
    colSpan: 1,
    rowSpan: 1,
    description:
      "IRS violations involve legal cases related to the breach of tax laws and regulations. This includes tax evasion, failure to file tax returns, fraudulent claims, and other forms of non-compliance with IRS regulations.",
  },
  {
    _id: "26",
    label: "Kickbacks",
    imageUrl: Kickbacks,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Kickbacks refer to the illegal practice of returning a portion of the money earned in business transactions as a favor or reward. This area involves bribery, corruption, and illegal incentivization in business and government dealings.",
  },
  {
    _id: "27",
    label: "Mail Fraud",
    imageUrl: MailFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Mail fraud includes any fraudulent scheme to intentionally deprive another of property or honest services via mail or electronic communication. It covers a wide range of deceptive practices using postal services.",
  },
  {
    _id: "28",
    label: "Mortgage Fraud",
    imageUrl: MortgageFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Mortgage fraud involves misrepresentation, misstatement, or omission in relation to a mortgage loan application. It includes fraud for profit, housing fraud, and other deceptive practices in mortgage lending.",
  },
  {
    _id: "29",
    label: "Money Laundering",
    imageUrl: MoneyLaundering,
    colSpan: 1,
    rowSpan: 1,
    description:
      "The image is likely to depict an activity or symbols associated with money laundering, which is the illegal process of making large amounts of money generated by a criminal activity, such as drug trafficking or terrorist funding, appear to be earned legally. It may show stacks of money, financial documents, or a more abstract representation of the process of cleaning 'dirty' money.",
  },
  {
    _id: "30",
    label: "RICO Cases",
    imageUrl: RicoCases,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This image would represent RICO (Racketeer Influenced and Corrupt Organizations Act) cases, which involve criminal organizations and activities such as bribery, extortion, and other forms of organized crime. The image might show legal documents, courtroom settings, or symbols representing organized crime.",
  },
  {
    _id: "31",
    label: "Security Violations",
    imageUrl: SecurityViolation,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This image could show scenarios or symbols related to breaches in security, such as hacking, unauthorized access to confidential information, or scenes of surveillance and monitoring. It might include images of computers, locks being broken, or surveillance cameras.",
  },
  {
    _id: "32",
    label: "Sex Crimes",
    imageUrl: SexCrimes,
    colSpan: 1,
    rowSpan: 1,
    description:
      "The image for this label would be sensitive and handled carefully. It might show symbolic representations of the legal aspects of sex crimes, such as gavels, law books, or courtroom settings, avoiding explicit or disturbing imagery.",
  },
  {
    _id: "33",
    label: "State Felony Appeals",
    imageUrl: StateFelonyAppeals,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This would depict elements associated with the appellate process in criminal law, particularly for state felonies. Imagery might include courtrooms, judges, legal documents, or scales of justice to symbolize the appeal process in the judicial system.",
  },
  {
    _id: "34",
    label: "State Felony Trials",
    imageUrl: StateFelonyTrials,
    colSpan: 1,
    rowSpan: 1,
    description:
      "Similar to state felony appeals, this image would focus on the trial aspect, possibly showing a courtroom scene, a judge, jury, attorneys, or legal documents to represent the process of a felony trial at the state level.",
  },
  {
    _id: "35",
    label: "Telemarketing Fraud",
    imageUrl: TelemarketingFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This image could depict elements related to deceptive or fraudulent telemarketing practices. It might include telephones, computers, or individuals in a call center setting, along with symbols of deceit like false charts or misleading advertisements.",
  },
  {
    _id: "36",
    label: "Trade Secret Theft",
    imageUrl: TradeSecretTheft,
    colSpan: 1,
    rowSpan: 1,
    description:
      "To represent trade secret theft, the image might include symbols like a lock being picked, a vault being opened, or documents with confidential information, symbolizing the illicit acquisition of protected corporate information.",
  },
  {
    _id: "37",
    label: "International Crimes",
    imageUrl: InternationalCrimes,
    colSpan: 2,
    rowSpan: 2,
    description:
      "This label suggests crimes that cross international borders. The image might include globes, maps, international symbols, or legal documents to represent the global nature of these crimes.",
  },
  {
    _id: "39",
    label: "International Extradition",
    imageUrl: InternationalExtradition,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This would focus on the legal process of extraditing a person from one country to another. Imagery could include airplanes, flags of different countries, handcuffs, or legal documents to symbolize the extradition process.",
  },
  {
    _id: "40",
    label: "White Collar Crimes",
    imageUrl: WhiteCollarCrimes,
    colSpan: 1,
    rowSpan: 2,
    description:
      "The image for this label would likely depict scenarios or symbols related to non-violent, financially motivated crimes typically committed by business and government professionals. This might include businessmen, stacks of money, computers, or legal documents.",
  },
  {
    _id: "38",
    label: "Internet Fraud",
    imageUrl: InternetFraud,
    colSpan: 1,
    rowSpan: 1,
    description:
      "This image would represent deceptive practices and fraud conducted via the internet. It might show computers, digital symbols, or scenes of online transactions, emphasizing the digital nature of the crime.",
  },
];

export const NAV_ITEMS = [
  {
    id: "about",
    label: "About",
    href: "about",
  },
  {
    id: "practice-areas",
    label: "Practice Areas",
    href: "practice-areas",
  },
  {
    id: "maya-macey-foundation",
    label: "Maya Macey Foundation",
    href: "maya-macey-foundation",
  },
  {
    id: "contact",
    label: "Contact",
    href: "contact",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Jane Doe",
    description:
      "Faced with a daunting legal challenge, I sought the expertise of Macey Law. Their team provided not only legal representation but also constant support and reassurance throughout the process. Their strategic approach played a crucial role in dealing with the complexities of my case, leading to an outcome better than I had hoped.",
  },
  {
    id: "2",
    author: "John Doe",
    description:
      "The team at Macey Law was pivotal in my legal challenge, demonstrating courtroom expertise from the start. They handled my case with professionalism and empathy, addressing every concern and simplifying the complex legal process. The positive resolution they achieved has greatly impacted my life, and I wholeheartedly recommend them for their dedication and exceptional legal representation.",
  },
  {
    id: "3",
    author: "Jane Doe",
    description:
      "In my legal ordeal, Macey Law was a beacon of hope. They provided more than legal expertise; their reassurance and strategic approach were instrumental in navigating my case's complexities. I am immensely grateful for their outstanding service and support, which led to a better outcome than I expected. Their ability to simplify a challenging situation is why I highly recommend them.",
  },
];

export const FOOTER_LINKS = [
  {
    id: "terms-of-service",
    label: "Terms of Service",
    href: "terms-of-service",
  },
  {
    id: "privacy-policy",
    label: "Privacy Policy",
    href: "privacy-policy",
  },
  {
    id: "faq",
    label: "FAQ",
    href: "faq",
  },
];

export interface NewsProps {
  id: number;
  title: string;
  description: string;
  href?: string;
  image: string;
  bkgColor: string;
  btnColor: string;
  iconColor: "Light" | "Dark";
}

export const NEWS_ARTICLES: NewsProps[] = [
  {
    id: 1,
    title: "ABC",
    description:
      "MACEY LAW took center stage on ABC News, demystifying legal jargon and outlining DUI/DWI penalties, providing clarity and expert insights into complex legal matters.",
    href: "",
    iconColor: "Dark",
    btnColor: "#fff",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/2044px-American_Broadcasting_Company_Logo.svg.png",
    bkgColor: "#000",
  },
  {
    id: 3,
    title: "CNN",
    description:
      "On CNN, MACEY LAW provided in-depth commentary on Money Laundering, breaking down the complexities of financial crimes and their legal implications.",
    href: "",
    iconColor: "Light",
    btnColor: "#000",
    image: "https://1000marcas.net/wp-content/uploads/2020/03/logo-CNN.png",
    bkgColor: "#fff",
  },
  {
    id: 2,
    title: "Fox News",
    description:
      "MACEY LAW appeared on Fox News, offering expert analysis on International Crimes, shedding light on global legal intricacies and enforcement challenges.",
    href: "",
    iconColor: "Light",
    btnColor: "#DC0100",
    image:
      "https://brandlogos.net/wp-content/uploads/2021/04/fox-news-logo.png",
    bkgColor: "#003366",
  },
  {
    id: 4,
    title: "NBC",
    description:
      "MACEY LAW was featured on NBC, discussing the nuances of Drug Trafficking laws, and offering their seasoned perspective on this critical legal issue.",
    href: "",
    iconColor: "Light",
    btnColor: "#05AC3F",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/567px-NBC_logo.svg.png",
    bkgColor: "#fff",
  },
  {
    id: 5,
    title: "SkyNews",
    description:
      "SkyNews welcomed MACEY LAW to discuss Antitrust Violations, where they expertly navigated through the intricacies of corporate law and its global impact.",
    href: "https://news.sky.com/",
    iconColor: "Dark",
    btnColor: "#fff",
    image:
      "https://logos-world.net/wp-content/uploads/2023/04/Sky-News-Logo-2005.png",
    bkgColor: "#E50009",
  },
];
