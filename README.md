# Myco Faucet V2 🚰

A modern Web3 faucet application for distributing test tokens on Binance Smart Chain (BSC) Testnet. Built with React, TypeScript, and Web3.js.

# ➡️ SMART CONTRACT REPOSITORY - https://github.com/Theobhg/my-coin-bep-20

## 🌟 Features

- **Daily Token Distribution**: Users can claim test tokens once every 24 hours
- **MetaMask Integration**: Seamless wallet connection with MetaMask
- **reCAPTCHA Protection**: Google reCAPTCHA integration to prevent bot abuse
- **Rate Limiting**: Backend protection against spam requests
- **Modern UI**: Beautiful and responsive interface built with TailwindCSS
- **Real-time Feedback**: Transaction hash display and status updates
- **BSC Testnet Support**: Specifically designed for BSC testnet testing

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Web3.js** - Ethereum JavaScript API
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

### Backend
- **Fastify** - Fast and efficient web framework
- **TypeScript** - Type safety
- **Web3.js** - Blockchain interaction
- **Zod** - Schema validation
- **Swagger** - API documentation

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher)
- **pnpm** package manager
- **MetaMask** browser extension
- **BSC Testnet** configured in your wallet
- Private keys and RPC endpoints for BSC testnet

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/myco-faucet-v2.git
cd myco-faucet-v2
```

### 2. Install dependencies

#### Backend
```bash
cd backend
pnpm install
```

#### Frontend
```bash
cd frontend
pnpm install
```

### 3. Environment Configuration

#### Backend (.env)
Create a `.env` file in the `backend` directory:

```env
# Web3 Configuration
RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
PRIVATE_KEY=your_private_key_here
CONTRACT_ADDRESS=0xfe4Fce76FCC47469bCB0F92C8d0B95Fe26279782

# Server Configuration
PORT=3333
```

#### Frontend (.env)
Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:3333
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

## 🎯 Usage

### Development Mode

#### 1. Start the Backend Server
```bash
cd backend
pnpm dev
```
The backend will run on `http://localhost:3333`

#### 2. Start the Frontend Development Server
```bash
cd frontend
pnpm dev
```
The frontend will run on `http://localhost:5173`

### Production Build

#### Backend
```bash
cd backend
pnpm build
pnpm start
```

#### Frontend
```bash
cd frontend
pnpm build
pnpm preview
```

## 📁 Project Structure

```
myco-faucet-v2/
├── backend/
│   ├── src/
│   │   ├── http/
│   │   │   ├── routes/
│   │   │   │   └── mint.ts          # Token minting endpoint
│   │   │   └── server.ts            # Fastify server setup
│   │   ├── providers/
│   │   │   └── web3-provider.ts     # Web3 interaction logic
│   │   └── abi.json                 # Smart contract ABI
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── header.tsx       # Header component
│   │   │   │   ├── main.tsx         # Main content
│   │   │   │   └── footer.tsx       # Footer component
│   │   │   ├── ui/                  # Reusable UI components
│   │   │   ├── get-coins.tsx        # Token claiming UI
│   │   │   └── user-guide.tsx       # User instructions
│   │   ├── services/
│   │   │   ├── http-client.ts       # API client
│   │   │   └── web3.ts              # Web3 service
│   │   ├── App.tsx                  # Main App component
│   │   └── main.tsx                 # Entry point
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

## 🔑 API Endpoints

### POST `/mint/:wallet`

Mints and transfers tokens to the specified wallet address.

**Parameters:**
- `wallet` (path parameter): The recipient wallet address

**Response:**
```json
{
  "message": "Minting tokens...",
  "tx": "0x..."
}
```

**Rate Limit:** Once per wallet per 24 hours

**Error Responses:**
- `429`: Too Many Requests - "You can only mint once per day. Try again tomorrow."
- `500`: Internal Server Error - "Error minting tokens"

## 🌐 BSC Testnet Setup

### Adding BSC Testnet to MetaMask

1. Visit the [official Binance guide](https://academy.binance.com/pt/articles/connecting-metamask-to-binance-smart-chain)
2. Add the BSC Testnet network to your MetaMask wallet
3. Add the token contract address: `0xfe4Fce76FCC47469bCB0F92C8d0B95Fe26279782`

### Network Details
- **Network Name:** BSC Testnet
- **RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545/
- **Chain ID:** 97
- **Symbol:** BNB
- **Block Explorer:** https://testnet.bscscan.com

## 📝 License

This project is licensed under the MIT License.

# **Note:** This is a testnet faucet for educational purposes!!!!