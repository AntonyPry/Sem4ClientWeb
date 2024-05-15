import { describe, vitest } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import DynamicPagination from "./DynamicPagination";
import "intersection-observer";

vitest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("DynamicPagination", () => {
  test("отображает список университетов", async () => {
    const universities = [
      { name: "University 1", country: "Country 1" },
      { name: "University 2", country: "Country 2" },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: universities });

    render(<DynamicPagination />);

    await waitFor(() => {
      expect(screen.getByText("List Universities")).toBeInTheDocument();
      expect(screen.getByText("University 1")).toBeInTheDocument();
      expect(screen.getByText("University 2")).toBeInTheDocument();
    });
  });

  test("загружает больше университетов при прокрутке", async () => {
    const universities1 = [
      { name: "University 1", country: "Country 1" },
      { name: "University 2", country: "Country 2" },
    ];
    const universities2 = [
      { name: "University 3", country: "Country 3" },
      { name: "University 4", country: "Country 4" },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: universities1 }).mockResolvedValueOnce({ data: universities2 });

    render(<DynamicPagination />);

    await waitFor(() => {
      expect(screen.getByText("University 1")).toBeInTheDocument();
      expect(screen.getByText("University 2")).toBeInTheDocument();
    });

    window.scrollTo(0, document.body.scrollHeight);

    await waitFor(() => {
      expect(screen.getByText("University 3")).toBeInTheDocument();
      expect(screen.getByText("University 4")).toBeInTheDocument();
    });
  });
});
