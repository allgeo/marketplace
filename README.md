# OpenHub

OpenHub is a [brief description of your project].

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following:

1. A Supabase project set up and linked to the backend (refer to [Supabase documentation](https://supabase.com/docs))
2. A Google Cloud Project configured for OAuth
3. Node.js and npm installed on your system

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/allgeo/openhub.git
   cd openhub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PUBLIC_SUPABASE_URL="your_supabase_url"
   PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
   ```
   Replace the placeholder values with your actual Supabase credentials.

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application should now be running on `http://localhost:3000` (or your specified port).
