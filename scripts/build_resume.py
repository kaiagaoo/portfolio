"""Build the portfolio resume with ReportLab; retain the previous PDF separately."""

from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, Flowable
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/Kaia_Gao_Resume.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
for name, filename in [
    ("ResumeTimes", "Times New Roman.ttf"),
    ("ResumeTimes-Bold", "Times New Roman Bold.ttf"),
    ("ResumeTimes-Italic", "Times New Roman Italic.ttf"),
    ("ResumeTimes-BoldItalic", "Times New Roman Bold Italic.ttf"),
]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily("ResumeTimes", normal="ResumeTimes", bold="ResumeTimes-Bold",
                              italic="ResumeTimes-Italic", boldItalic="ResumeTimes-BoldItalic")
INK = colors.black
MUTED = colors.black
WIDTH = 523.3

body = ParagraphStyle("Body", fontName="ResumeTimes", fontSize=11, leading=12.5,
                      textColor=INK, spaceAfter=1, alignment=TA_JUSTIFY)
small = ParagraphStyle("Small", parent=body, fontSize=10.4, leading=11.5, spaceAfter=0, alignment=0)
entry = ParagraphStyle("Entry", parent=body, fontSize=10.8, leading=12, spaceAfter=0, alignment=0)
date = ParagraphStyle("Date", parent=entry, alignment=2)
bullet_style = ParagraphStyle("Bullet", parent=body, leftIndent=14, firstLineIndent=0, bulletIndent=0)
contact = ParagraphStyle("Contact", parent=small, alignment=TA_CENTER)
story = []


class SectionHeading(Flowable):
    def __init__(self, text):
        super().__init__()
        self.text = text.upper()
        self.height = 15
        self.width = WIDTH
        self.spaceBefore = 4
        self.keepWithNext = True

    def draw(self):
        self.canv.setFillColor(INK)
        self.canv.setFont("ResumeTimes-Bold", 11)
        self.canv.drawString(0, 4, self.text)
        self.canv.setStrokeColor(INK)
        self.canv.setLineWidth(0.8)
        self.canv.line(0, 2, self.width, 2)


def p(text, style=body):
    return Paragraph(text, style)


def section(text):
    story.append(SectionHeading(text))


def heading(left, right):
    row = Table([[p(left, entry), p(right, date)]], colWidths=[WIDTH - 137, 137])
    row.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return row


def experience(company, role, dates, bullets):
    items = [heading(f"<b>{company}</b> | <i>{role}</i>", dates)]
    items.extend(Paragraph(text, bullet_style, bulletText="\u2022") for text in bullets)
    items.append(Spacer(1, 2))
    story.append(KeepTogether(items))


story.append(p("Qianwen (Kaia) Gao", ParagraphStyle("Name", parent=body, fontName="ResumeTimes-Bold", fontSize=14.1, leading=17, spaceAfter=10, alignment=TA_CENTER)))
story.append(p('+1 (510) 542-6385 | <link href="mailto:kaiagao@berkeley.edu">kaiagao@berkeley.edu</link> | <link href="https://www.linkedin.com/in/kaiagao" color="#0000ee"><u>linkedin.com/in/kaiagao</u></link> | <link href="https://kaiagao.com" color="#0000ee"><u>kaiagao.com</u></link> | <link href="https://github.com/kaiagaoo" color="#0000ee"><u>GitHub</u></link>', contact))
section("Summary")
story.append(p("UC Berkeley Computational Social Science master's graduate working across product analytics, user research, and AI evaluation. Co-author of CHASE (accepted to COLM 2026) and builder of PickMem."))

section("Education")
story.append(heading("<b>University of California, Berkeley</b>", "Jun 2025 - May 2026"))
story.append(p("Master of Computational Social Science | GPA: 3.87/4.00", small))
story.append(Spacer(1, 3))
story.append(heading("<b>Zhejiang University</b>", "Sep 2021 - Jun 2025"))
story.append(p("Bachelor of Arts, Communication | GPA: 3.95/4.00", small))

section("Skills")
story.append(p("<b>Languages &amp; development:</b> Python, SQL, R, TypeScript, React, Next.js, Node.js, PostgreSQL", small))
story.append(p("<b>Research &amp; analytics:</b> A/B testing, causal inference, regression, survey design, behavioral analysis", small))
story.append(p("<b>AI &amp; data:</b> LLM evaluation, RAG, NLP, scikit-learn, pandas, Tableau, Streamlit", small))

section("Professional Experience")
experience("Wrodium", "AI Research Intern", "Dec 2025 - Jul 2026", [
    "<b>AI Evaluation Research</b> - Co-authored CHASE, investigating how repeated optimization for LLM rankings reshapes content ecosystems across six domains; paper accepted to COLM 2026.",
    "<b>Causal Benchmark Development</b> - Led FreshRAG benchmark development to study content freshness and RAG hallucination; built temporal QA data using Myers diff and designed factorial experiments with regression-based analysis.",
])
experience("APPA Health", "Strategy &amp; Data Analyst Intern", "Sep - Dec 2025", [
    "<b>Impact Measurement</b> - Established a KPI framework for youth wellness programs and analyzed pre/post survey data to assess student engagement and inform program iteration and funding reports.",
])
experience("RedNote", "Marketing Analytics Intern", "Aug 2024 - Jan 2025", [
    "<b>Audience Segmentation</b> - Analyzed behavioral and demographic data with SQL in Hive to build 35 audience segments for pet-industry advertisers, contributing to CNY 1.83M in ad revenue.",
    "<b>Experimentation &amp; Reporting</b> - Automated KPI dashboards with Python, SQL, and RedBI; designed A/B tests for targeting and creatives and presented performance insights to 740+ clients and internal stakeholders.",
])
experience("Didi", "Product &amp; User Analytics Intern", "Mar - Jun 2024", [
    "<b>Pricing Analytics</b> - Applied regression and causal inference to supply, demand, and price elasticity, informing pricing strategies that contributed to a 2% revenue lift.",
    "<b>User Research</b> - Designed user surveys and combined findings with behavioral data analysis to identify hourly-driver service pain points, informing improvements that reduced complaints by 3%.",
])

section("Publication")
story.append(p('<b>CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target</b>'))
story.append(p('<b>Qianwen Gao</b>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski.', small))
story.append(p('Accepted to the Conference on Language Modeling (<b>COLM 2026</b>). <link href="https://arxiv.org/abs/2608.30466" color="#000000">arXiv:2608.30466</link>', small))

section("Projects")
experience('<link href="https://github.com/kaiagaoo/PickMem" color="#000000">PickMem</link>', "Personal Project", "Jul 2026", [
    "Built an LLM memory-curation application for capturing, organizing, and retrieving information with semantic search; implemented a full-stack application using React, TypeScript, Node.js, Express, and MongoDB.",
    "Built secure authentication, backend APIs, and optimized database queries to support fast semantic retrieval through a responsive user interface.",
])
experience('<link href="https://github.com/kaiagaoo/ONGB-chronic-absenteeism" color="#000000">Student Absenteeism Analysis</link>', "ONGB &amp; Wizearly", "Feb - May 2026", [
    "Integrated national datasets with OUSD student records to develop predictive features and early-warning analyses; created a landscape report and interactive dashboard to support education intervention planning.",
])

section("Leadership")
experience("ZJU Lingyun Musical Club", "President", "Sep 2021 - May 2024", [
    "Led 150+ members across eight departments and delivered an annual musical production attended by 6,000+ people.",
])


doc = SimpleDocTemplate(str(OUTPUT), pagesize=(595.3, 841.9), leftMargin=30, rightMargin=30,
                        topMargin=39, bottomMargin=30, title="Qianwen (Kaia) Gao - Resume",
                        author="Qianwen (Kaia) Gao", subject="Product analytics, AI evaluation, user research, and applied AI")
doc.build(story)
reader = PdfReader(OUTPUT)
assert len(reader.pages) == 1, f"Resume must be one page; got {len(reader.pages)}"
copyfile(OUTPUT, ROOT / "public/Kaia_Gao_Resume.pdf")
print(f"Created one-page resume: {OUTPUT}")
