import { WorkerSpec } from '../types';

export const AI_WORKERS: WorkerSpec[] = [
  {
    id: 'customer-support',
    name: 'AI Customer Support',
    role: 'Customer Support & Stock Availability Worker',
    tagline: 'Answer customer questions with business context.',
    description: 'Helps answer product questions, check authorized business information and handle routine customer conversations on WhatsApp and web channels.',
    task: 'Respond to customer enquiries regarding size availability, branch stock, delivery timeframes, and pricing.',
    informationUsed: [
      'Live authorized Inventory Table (SKU, size, color, branch counts)',
      'Approved Product Catalog (specifications, price in ZMW, descriptions)',
      'Standard Store Policy (delivery zones in Lusaka/Copperbelt, return window)'
    ],
    actionsTaken: [
      'Searches inventory records using exact item identifiers',
      'Drafts context-aware, courteous responses with stock confirmation',
      'Sends messages directly on approved WhatsApp Business API channels'
    ],
    humanApprovalRequired: [
      'Discounts or custom pricing requests outside official limits',
      'Stock reservations exceeding 24 hours without upfront payment',
      'Handling disputed delivery charges or customer complaints'
    ],
    fallbackBehavior: 'Never guesses stock or confirms items without a positive database check. If a product is unlisted or ambiguous, the worker politely asks for clarification and flags the chat for human store staff.',
    sampleInput: 'Customer: "Hi, do you still have the black Chelsea boots in size 42 at Cairo Road branch?"',
    sampleOutput: 'AI Worker: "Let me check our current stock records... We have 3 pairs of Black Chelsea Boots (Size 42) in stock at Cairo Road, priced at K650. Would you like me to hold a pair for collection today?"'
  },
  {
    id: 'catalog-management',
    name: 'AI Catalog Management',
    role: 'Central Product Catalog Synchronizer',
    tagline: 'Spend less time repeating product updates.',
    description: 'Helps maintain central product information and coordinates supported catalog updates across storefronts, WhatsApp catalogs, and internal lists.',
    task: 'Coordinate price adjustments, description revisions, and availability status across connected sales points.',
    informationUsed: [
      'Master SKU Record & Cost of Goods Sold (COGS)',
      'Channel sync manifests (WhatsApp Business Catalog, Web Storefront)',
      'Product imagery and attribute definitions'
    ],
    actionsTaken: [
      'Updates master product specification',
      'Dispatches update payloads to authorized storefront webhooks',
      'Generates sync verification receipt showing success or pending status'
    ],
    humanApprovalRequired: [
      'Price changes altering gross margin below 20%',
      'Archiving or discontinuing active items with recorded pending orders',
      'Bulk catalog imports exceeding 50 items simultaneously'
    ],
    fallbackBehavior: 'If an external platform endpoint experiences latency or fails sync, Mupezeni logs an attention state and retains the central record status as "Sync Pending - Human Attention Needed".',
    sampleInput: 'Action: Update "Linen Button-down Shirt" price from K350 to K380 across WhatsApp & Storefront',
    sampleOutput: 'Result: Master record updated (SKU-SHIRT-04). WhatsApp catalog payload dispatched: Success (200 OK). Web storefront synchronized. Audit entry logged.'
  },
  {
    id: 'marketing',
    name: 'AI Marketing',
    role: 'Product Content & Campaign Drafter',
    tagline: 'Turn product information into marketing work.',
    description: 'Helps prepare product-focused content, promotional campaign briefs, and WhatsApp broadcast copy with strict human review steps before publishing.',
    task: 'Draft marketing captions, campaign announcements, and seasonal showcases tailored for Zambian shoppers.',
    informationUsed: [
      'Seasonal inventory turnover priorities (e.g. overstocked winter jackets)',
      'Product specifications and lifestyle benefits',
      'Zambian cultural calendar and retail pay-day cycles (e.g. month-end)'
    ],
    actionsTaken: [
      'Generates draft campaign copy and image pairing suggestions',
      'Prepares WhatsApp broadcast template drafts adhering to Meta guidelines',
      'Queues drafted posts into the Mupezeni approval pipeline'
    ],
    humanApprovalRequired: [
      'ALL publishing actions require human sign-off; worker CANNOT post autonomously',
      'Broadcast recipient segments and scheduled delivery times',
      'Promotional voucher codes and validity windows'
    ],
    fallbackBehavior: 'Drafts remain in "Review Required" status until an authenticated store manager taps "Approve & Schedule".',
    sampleInput: 'Brief: Create month-end WhatsApp broadcast for new activewear arrival (5 styles, prices K220–K480)',
    sampleOutput: 'Draft Campaign ready: "Ready for your weekend run? 🏃 Fresh activewear collection now in stock at Cairo Road & online. Sizes S–XXL starting from K220. Tap here to browse." [Awaiting Owner Approval]'
  },
  {
    id: 'sales-followup',
    name: 'AI Sales and Follow-up',
    role: 'Lead & Abandoned Enquiry Coordinator',
    tagline: 'Keep customer follow-ups from disappearing into chat history.',
    description: 'Helps organize customer enquiries, identify pending checkout conversations, and prepare timely follow-up messages respecting customer consent.',
    task: 'Surface customers who asked for payment instructions or account details but did not finalize the order.',
    informationUsed: [
      'WhatsApp order conversation state (Inquiry -> Quotation Sent -> Awaiting Airtel/MTN Money)',
      'Customer messaging history and opt-in status',
      'Product reservation timeout windows'
    ],
    actionsTaken: [
      'Flags uncompleted transactions after 3 hours',
      'Prepares gentle reminders with mobile money payment steps',
      'Releases unconfirmed stock reservations back into available pool if expired'
    ],
    humanApprovalRequired: [
      'Direct order cancellations requiring refund processing',
      'Discounts offered to induce purchase completion',
      'Customer requests to switch delivery addresses'
    ],
    fallbackBehavior: 'Respects customer quiet hours (no messages sent past 8:00 PM). Never messages contacts who declined previous updates.',
    sampleInput: 'State: Order #1042 quoted K520 via MTN Mobile Money 4 hours ago. No receipt received.',
    sampleOutput: 'Prepared reminder: "Hi Mwila, just checking if you still need the Ankara Tote Bag reserved for tomorrow\'s morning delivery? Let us know if you need the MTN merchant code again!"'
  },
  {
    id: 'business-operations',
    name: 'AI Business Operations',
    role: 'Operational Alert & Task Coordinator',
    tagline: 'Know what needs your attention.',
    description: 'Helps organize operational information, flags stock re-order thresholds, and surfaces daily operational tasks before they become emergencies.',
    task: 'Monitor stock thresholds, mismatched sales entries, and supplier reorder timelines.',
    informationUsed: [
      'Safety stock thresholds per SKU',
      'Historical daily run rates across branches',
      'Unfulfilled orders and pending dispatch queues'
    ],
    actionsTaken: [
      'Highlights items at critical stock level (< 5 units)',
      'Compiles morning store operational checklist for staff',
      'Calculates recommended re-order quantities based on past 14-day velocity'
    ],
    humanApprovalRequired: [
      'Generating or sending purchase orders to external suppliers',
      'Manual stock write-offs (damaged or missing inventory)',
      'Adjusting minimum threshold settings'
    ],
    fallbackBehavior: 'Surfaces anomalies in the "Attention Needed" dashboard widget without modifying underlying records.',
    sampleInput: 'Alert trigger: "Unisex Canvas Sneakers" down to 2 units at Downtown branch with 4 WhatsApp inquiries today.',
    sampleOutput: 'Urgent Task: "Canvas Sneakers (SKU-SNK-09) near stockout. Transfer 6 units from Warehouse B or trigger restock order."'
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    role: 'Operational Query & Reporting Worker',
    tagline: 'Turn business records into useful answers.',
    description: 'Helps turn available sales, inventory and operational records into clear summaries for decision-making without complex spreadsheets.',
    task: 'Answer natural questions from the owner regarding top sellers, weekly revenue, margins, and unpaid invoices.',
    informationUsed: [
      'Validated sales ledger and transaction timestamps',
      'Cost of Goods Sold (COGS) figures recorded at time of purchase',
      'Payment completion logs (Mobile Money, POS, Cash)'
    ],
    actionsTaken: [
      'Executes deterministic calculation against verified records',
      'Displays date bounds, itemized breakdowns, and exact arithmetic',
      'Presents clear summary cards with gross margin computations'
    ],
    humanApprovalRequired: [
      'Read-only worker; does not alter financial records or database entries',
      'Exporting financial datasets to external formats'
    ],
    fallbackBehavior: 'If cost figures are missing for older products, the worker explicitly warns: "Estimated gross profit excludes 3 uncosted items. Margin reflects recorded items only."',
    sampleInput: 'Owner asks: "Which products generated the most revenue over the past 7 days?"',
    sampleOutput: 'Result: Past 7 Days (Oct 13 - Oct 19). Total Recorded Revenue: K34,800. Top items: 1. Smart Watch Series 4 (24 units • K14,400), 2. Leather Messenger Bag (16 units • K10,400), 3. Wireless Earbuds (20 units • K5,000). COGS: K19,200. Estimated Gross Profit: K15,600 (44.8%).'
  }
];

export const SAMPLE_PRODUCTS = [
  { id: '1', sku: 'ZAM-BT-42', name: 'Leather Chelsea Boots', category: 'Footwear', price: 650, cost: 380, stock: 14, branch: 'Cairo Road, Lusaka', channels: ['WhatsApp', 'Online Store'] },
  { id: '2', sku: 'ZAM-SH-04', name: 'Linen Button-down Shirt', category: 'Apparel', price: 380, cost: 210, stock: 22, branch: 'East Park, Lusaka', channels: ['WhatsApp', 'Storefront'] },
  { id: '3', sku: 'ZAM-BAG-09', name: 'Ankara Travel Duffel', category: 'Accessories', price: 520, cost: 290, stock: 8, branch: 'Ndola Branch', channels: ['WhatsApp'] },
  { id: '4', sku: 'ZAM-SNK-11', name: 'Low Canvas Sneakers', category: 'Footwear', price: 420, cost: 240, stock: 3, branch: 'Downtown Lusaka', channels: ['WhatsApp', 'Showroom'] },
];

export const SAMPLE_SALES_RECORD = [
  { orderId: 'ORD-8921', customer: 'Chileshe Mulenga', channel: 'WhatsApp', item: 'Leather Chelsea Boots (Size 42)', amount: 650, paymentMethod: 'Airtel Money', status: 'Completed', time: '14 mins ago' },
  { orderId: 'ORD-8920', customer: 'Mwamba Bwalya', channel: 'WhatsApp', item: 'Linen Button-down Shirt', amount: 380, paymentMethod: 'MTN MoMo', status: 'Completed', time: '42 mins ago' },
  { orderId: 'ORD-8919', customer: 'Kondwani Banda', channel: 'Storefront', item: 'Ankara Travel Duffel', amount: 520, paymentMethod: 'Card', status: 'Dispatched', time: '1 hr ago' },
];
