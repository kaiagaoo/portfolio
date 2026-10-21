"""Build a one-page research CV for Greater Boston research assistant roles."""

from pathlib import Path
from shutil import copyfile

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/Qianwen_Gao_Research_CV.pdf"
PUBLIC = ROOT / "public/Qianwen_Gao_Research_CV.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
for name, filename in [
    ("CVTimes", "Times New Roman.ttf"),
    ("CVTimes-Bold", "Times New Roman Bold.ttf"),
    ("CVTimes-Italic", "Times New Roman Italic.ttf"),
]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily("CVTimes", normal="CVTimes", bold="CVTimes-Bold", italic="CVTimes-Italic")

PAGE_WIDTH, PAGE_HEIGHT = 595.3, 841.9
MARGIN_X = 41
CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN_X
INK = colors.HexColor("#20252a")
LINK = colors.HexColor("#1e5b81")

body = ParagraphStyle(
    "Body", fontName="CVTimes", fontSize=10.9, leading=14.1,
    textColor=INK, spaceAfter=3.3, alignment=TA_LEFT,
)
small = ParagraphStyle("Small", parent=body, fontSize=10.4, leading=13.2, spaceAfter=2)
name_style = ParagraphStyle(
    "Name", parent=body, fontName="CVTimes-Bold", fontSize=19,
    leading=23, alignment=TA_CENTER, spaceAfter=5,
)
contact_style = ParagraphStyle(
    "Contact", parent=small, fontSize=9.7, leading=12,
    alignment=TA_CENTER, spaceAfter=5,
)
section_style = ParagraphStyle(
    "Section", parent=body, fontName="CVTimes-Bold", fontSize=11.1,
    leading=14, spaceBefore=10, spaceAfter=5,
    borderBottomWidth=0.65, borderBottomColor=INK, borderPadding=2,
)
entry_style = ParagraphStyle("Entry", parent=body, fontSize=10.6, leading=13.2, spaceAfter=0)
date_style = ParagraphStyle("Date", parent=entry_style, alignment=TA_RIGHT)
bullet_style = ParagraphStyle(
    "Bullet", parent=body, leftIndent=13, firstLineIndent=0,
    bulletIndent=0, spaceAfter=4,
)


def paragraph(text, style=body):
    return Paragraph(text, style)


def section(title):
    return paragraph(title.upper(), section_style)


def heading(left, right):
    row = Table(
        [[paragraph(left, entry_style), paragraph(right, date_style)]],
        colWidths=[CONTENT_WIDTH - 126, 126],
    )
    row.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return row


def entry(left, right, bullets):
    items = [heading(left, right)]
    items.extend(paragraph(text, bullet_style) for text in bullets)
    items.append(Spacer(1, 3))
    return KeepTogether(items)


story = [
    paragraph("Qianwen (Kaia) Gao", name_style),
    paragraph(
        '<link href="mailto:kaiagao@berkeley.edu" color="#1e5b81">kaiagao@berkeley.edu</link>'
        '  |  <link href="https://kaiagao.com" color="#1e5b81">kaiagao.com</link>'
        '  |  <link href="https://github.com/kaiagaoo" color="#1e5b81">GitHub</link>'
        '  |  <link href="https://www.linkedin.com/in/kaiagao" color="#1e5b81">LinkedIn</link>',
        contact_style,
    ),
    section("Research interests"),
    paragraph(
        "Interpretable AI agents, faithful explanations, language and memory, grounded reasoning, "
        "and human-guided embodied systems.",
        small,
    ),
    section("Education"),
    heading("<b>University of California, Berkeley</b>", "2025 - 2026"),
    paragraph("Master of Computational Social Science | GPA: 3.87/4.00", small),
    heading("<b>Zhejiang University</b>", "2021 - 2025"),
    paragraph("Bachelor of Arts, Communication | GPA: 3.95/4.00", small),
    section("Publication"),
    paragraph(
        '<b><link href="https://arxiv.org/abs/2608.30466" color="#1e5b81">'
        'CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target'
        '</link></b>',
        body,
    ),
    paragraph(
        "<b>Qianwen Gao</b>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski. "
        "<i>Conference on Language Modeling (COLM)</i>, 2026. Poster presentation. "
        '<link href="https://arxiv.org/abs/2608.30466" color="#1e5b81">arXiv:2608.30466</link>.',
        small,
    ),
    section("Research and evaluation experience"),
    entry("<b>Wrodium</b> | AI Research Intern", "Dec 2025 - Jul 2026", [
        "Co-authored CHASE, a controlled simulation of how repeated optimization for LLM ranking "
        "signals changes content quality and ranking alignment across six domains.",
        "Led FreshRAG benchmark development: constructed temporal QA data from factual changes "
        "and designed controlled experiments on knowledge conflict, temporal grounding, and "
        "parametric override.",
    ]),
    entry("<b>APPA Health</b> | Strategy and Data Analyst Intern", "Sep - Dec 2025", [
        "Developed a measurement framework for youth wellness programs and analyzed pre/post "
        "survey data to assess engagement and inform program changes.",
    ]),
    section("Selected projects"),
    entry(
        '<b><link href="https://github.com/kaiagaoo/PickMem" color="#1e5b81">PickMem</link></b>'
        " | Independent project", "2026", [
            "Built a local-first LLM memory-curation application with semantic retrieval, making "
            "stored context easier for users to inspect and manage.",
        ],
    ),
    entry(
        '<b><link href="https://github.com/kaiagaoo/Consumer-Sentiment-Brand-Insights-nlp" '
        'color="#1e5b81">Amazon Fashion Review Sentiment Analysis</link></b>'
        " | Team course project", "2025", [
            "Analyzed approximately 831,000 reviews with topic modeling and aspect-based sentiment "
            "analysis to identify themes and product attributes associated with ratings.",
        ],
    ),
    entry(
        '<b><link href="https://github.com/kaiagaoo/ousd-absence-prediction" '
        'color="#1e5b81">Chronic Absenteeism Prediction</link></b>'
        " | ONGB and Wizearly capstone", "2026", [
            "Evaluated early-warning models on Oakland student attendance data and examined "
            "precision-recall tradeoffs to support decisions about intervention thresholds.",
        ],
    ),
    section("Methods and tools"),
    paragraph(
        "<b>Methods:</b> LLM evaluation, NLP, retrieval-augmented generation, experimental design, "
        "causal inference, regression.<br/>"
        "<b>Programming and tools:</b> Python, SQL, R, TypeScript; pandas, scikit-learn, PyTorch, Git.",
        small,
    ),
]

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=(PAGE_WIDTH, PAGE_HEIGHT),
    leftMargin=MARGIN_X, rightMargin=MARGIN_X, topMargin=34, bottomMargin=35,
    title="Qianwen (Kaia) Gao - Research CV",
    author="Qianwen (Kaia) Gao",
    subject="Research assistant CV: interpretable AI, language, memory, and AI evaluation",
)
doc.build(story)
reader = PdfReader(OUTPUT)
assert len(reader.pages) == 1, f"Research CV must be one page; got {len(reader.pages)}"
copyfile(OUTPUT, PUBLIC)
print(f"Created {OUTPUT}")
