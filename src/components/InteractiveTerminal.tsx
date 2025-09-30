import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveTerminal.scss';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: number;
}

const InteractiveTerminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    { cmd: 'whoami', output: 'cyberwar' },
    { cmd: 'pwd', output: '/home/cyberwar/portfolio' },
    { cmd: 'ls -la', output: 'total 8\ndrwxr-xr-x 3 cyberwar cyberwar 4096 Jan 1 00:00 .\ndrwxr-xr-x 3 cyberwar cyberwar 4096 Jan 1 00:00 ..\n-rw-r--r-- 1 cyberwar cyberwar 1024 Jan 1 00:00 skills.txt\n-rw-r--r-- 1 cyberwar cyberwar 2048 Jan 1 00:00 projects.json' },
    { cmd: 'cat skills.txt', output: 'React, TypeScript, Node.js, Python, AWS, Docker, Kubernetes' },
    { cmd: 'git status', output: 'On branch main\nYour branch is up to date with \'origin/main\'.\n\nnothing to commit, working tree clean' },
    { cmd: 'npm run build', output: '> cyberwar-portfolio@1.0.0 build\n> react-scripts build\n\nCreating an optimized production build...\nCompiled successfully.\n\nFile sizes after gzip:\n  49.73 kB  build/static/js/main.fa1a27c4.js\n  2.12 kB   build/static/css/main.e80d4d7d.css' },
    { cmd: 'help', output: 'Available commands:\n  whoami    - Show current user\n  pwd       - Print working directory\n  ls        - List directory contents\n  cat       - Display file contents\n  git       - Git commands\n  npm       - Node package manager\n  help      - Show this help\n  clear     - Clear terminal\n  exit      - Close terminal' }
  ];

  const addLine = (type: TerminalLine['type'], content: string) => {
    setLines(prev => [...prev, { type, content, timestamp: Date.now() }]);
  };

  const executeCommand = (cmd: string) => {
    addLine('command', `cyberwar@portfolio:~$ ${cmd}`);
    
    const command = commands.find(c => c.cmd === cmd.trim());
    if (command) {
      setTimeout(() => {
        addLine('output', command.output);
      }, 500);
    } else if (cmd.trim() === 'clear') {
      setTimeout(() => {
        setLines([]);
      }, 300);
    } else if (cmd.trim() === 'exit') {
      setTimeout(() => {
        setShowTerminal(false);
      }, 300);
    } else {
      setTimeout(() => {
        addLine('error', `Command not found: ${cmd.trim()}. Type 'help' for available commands.`);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentCommand.trim()) {
        executeCommand(currentCommand);
        setCurrentCommand('');
      }
    }
  };

  const startTypingDemo = () => {
    setIsTyping(true);
    const demoCommands = ['whoami', 'ls -la', 'cat skills.txt', 'git status'];
    let index = 0;

    const typeNextCommand = () => {
      if (index < demoCommands.length) {
        setCurrentCommand('');
        const command = demoCommands[index];
        let charIndex = 0;
        
        const typeChar = () => {
          if (charIndex < command.length) {
            setCurrentCommand(prev => prev + command[charIndex]);
            charIndex++;
            setTimeout(typeChar, 100);
          } else {
            setTimeout(() => {
              executeCommand(command);
              index++;
              setTimeout(typeNextCommand, 2000);
            }, 1000);
          }
        };
        
        typeChar();
      } else {
        setIsTyping(false);
      }
    };

    typeNextCommand();
  };

  useEffect(() => {
    if (showTerminal && !isTyping) {
      startTypingDemo();
    }
  }, [showTerminal]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <AnimatePresence>
      {showTerminal && (
        <motion.div
          className="interactive-terminal"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">cyberwar@portfolio: ~</div>
          </div>
          
          <div className="terminal-body" ref={terminalRef}>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className={`terminal-line ${line.type}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {line.content}
              </motion.div>
            ))}
            
            <div className="terminal-input-line">
              <span className="prompt">cyberwar@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                className="terminal-input"
                placeholder="Type a command..."
                autoFocus
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTerminal;
